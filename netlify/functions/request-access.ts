/**
 * Handles institutional-report access requests (capture-and-grant).
 *
 * Accepts a form-urlencoded or JSON POST with { name, email, firm, slug }.
 * use_case is accepted but no longer required (form field was removed).
 * Mints an HMAC-signed token (matching netlify/edge-functions/gate.ts), sets
 * cookies directly on the response, and redirects straight to the report. No
 * email round-trip — same model DocSend uses by default.
 *
 * Lead persistence:
 *   1. Function log line ([LEAD] prefix) — short-term, grep-friendly.
 *   2. Netlify Blobs store "leads" — durable, one blob per submission,
 *      keyed by timestamp + email-prefix.
 *   3. Telegram notification (best-effort) — sends to TELEGRAM_CHAT_ID via
 *      TELEGRAM_BOT_TOKEN if both are set. Failures don't block the user.
 *
 * Required env vars (set in Netlify dashboard):
 *   GATE_HMAC_SECRET   Shared with gate.ts.
 *   CURRENT_KID        Active key id (e.g. "v1"). Rotate to revoke en masse.
 * Optional env vars:
 *   SITE_ORIGIN        Override base URL, default "https://tidresearch.com".
 *   TOKEN_TTL_DAYS     Default 60.
 *   TELEGRAM_BOT_TOKEN HTTP API token from @BotFather; enables ping on lead.
 *   TELEGRAM_CHAT_ID   Group / user / channel id to receive the ping.
 */
import { getStore } from "@netlify/blobs";

interface TokenPayload {
  email: string;
  slug: string;
  exp: number;
  kid: string;
}

const TE = new TextEncoder();

function b64urlEncode(bytes: Uint8Array): string {
  let s = "";
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function hmacSign(secret: string, data: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    TE.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, TE.encode(data));
  return b64urlEncode(new Uint8Array(sig));
}

async function mintToken(
  payload: TokenPayload,
  secret: string,
): Promise<string> {
  const payloadB64 = b64urlEncode(TE.encode(JSON.stringify(payload)));
  const sig = await hmacSign(secret, payloadB64);
  return `${payloadB64}.${sig}`;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function badRequest(msg: string) {
  return new Response(JSON.stringify({ error: msg }), {
    status: 400,
    headers: { "Content-Type": "application/json" },
  });
}

async function parseBody(request: Request): Promise<Record<string, string>> {
  const ct = request.headers.get("Content-Type") ?? "";
  if (ct.includes("application/json")) {
    const j = await request.json();
    return Object.fromEntries(
      Object.entries(j).map(([k, v]) => [k, String(v ?? "")]),
    );
  }
  const text = await request.text();
  const params = new URLSearchParams(text);
  const out: Record<string, string> = {};
  for (const [k, v] of params) out[k] = v;
  return out;
}

// Netlify V2 functions expose env vars via Netlify.env.get() in addition to
// process.env. Prefer the Netlify API when available — some deployment
// contexts populate one but not the other.
function getEnv(name: string): string | undefined {
  // @ts-expect-error Netlify global present at runtime on Netlify Functions v2.
  const nf = typeof Netlify !== "undefined" ? Netlify?.env?.get?.(name) : undefined;
  return nf ?? process.env[name];
}

export default async (request: Request) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const secret = getEnv("GATE_HMAC_SECRET");
  const kid = getEnv("CURRENT_KID") ?? "v1";
  const origin = getEnv("SITE_ORIGIN") ?? "https://tidresearch.com";
  const ttlDays = Number(getEnv("TOKEN_TTL_DAYS") ?? 60);

  if (!secret) {
    console.error("GATE_HMAC_SECRET not set");
    return new Response("Server not configured", { status: 500 });
  }

  let body: Record<string, string>;
  try {
    body = await parseBody(request);
  } catch {
    return badRequest("Invalid body");
  }

  // Honeypot — silently drop to the thanks page, same as a real submit looks.
  if ((body["bot-field"] ?? "").trim()) {
    return Response.redirect(`${origin}/thanks-institutional`, 303);
  }

  const name = (body.name ?? "").trim().slice(0, 120);
  const email = (body.email ?? "").trim().toLowerCase().slice(0, 160);
  const firm = (body.firm ?? "").trim().slice(0, 160);
  const useCase = (body.use_case ?? "").trim().slice(0, 600);
  const slug = (body.slug ?? "").trim().slice(0, 80);

  if (!name || !firm || !slug) return badRequest("Missing required fields");
  if (!EMAIL_RE.test(email)) return badRequest("Invalid email");
  if (!/^[a-z0-9-]+$/.test(slug)) return badRequest("Invalid slug");

  const exp = Math.floor(Date.now() / 1000) + ttlDays * 86400;
  const token = await mintToken({ email, slug, exp, kid }, secret);
  const maxAge = Math.max(1, exp - Math.floor(Date.now() / 1000));

  const lead = {
    ts: new Date().toISOString(),
    slug,
    name,
    email,
    firm,
    use_case: useCase,
    kid,
    exp_utc: new Date(exp * 1000).toISOString(),
    ip: request.headers.get("X-Forwarded-For") ?? null,
    ua: request.headers.get("User-Agent") ?? null,
  };

  // 1. Function log — kept for back-compat with the old grep workflow.
  console.log("[LEAD] " + JSON.stringify(lead));

  // 2. Netlify Blobs — durable storage, one blob per lead. Best-effort: a
  //    failure here shouldn't block access (the log line is the safety net).
  try {
    const store = getStore("leads");
    const sortableTs = lead.ts.replace(/[:.]/g, "-");
    const emailPrefix = email.split("@")[0].slice(0, 32).replace(/[^a-z0-9-]/gi, "_");
    await store.setJSON(`${sortableTs}__${emailPrefix}`, lead);
  } catch (err) {
    console.error("[LEAD-BLOB-FAIL]", err);
  }

  // 3. Telegram notification — best-effort, optional. Posts a markdown
  //    summary to TELEGRAM_CHAT_ID via the bot identified by
  //    TELEGRAM_BOT_TOKEN. Both must be set; otherwise the function silently
  //    skips this step.
  const tgToken = getEnv("TELEGRAM_BOT_TOKEN");
  const tgChatId = getEnv("TELEGRAM_CHAT_ID");
  if (tgToken && tgChatId) {
    const safe = (s: string) =>
      s.replace(/[_*`[\]()~>#+=|{}.!\\-]/g, (c) => `\\${c}`);
    const text =
      `🔔 *New institutional lead*\n` +
      `Report: \`${safe(slug)}\`\n` +
      `Name: ${safe(name)}\n` +
      `Firm: ${safe(firm)}\n` +
      `Email: \`${safe(email)}\``;
    try {
      const res = await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: tgChatId,
          text,
          parse_mode: "MarkdownV2",
          disable_web_page_preview: true,
        }),
      });
      if (!res.ok) {
        console.error("[LEAD-TG-FAIL]", res.status, await res.text());
      }
    } catch (err) {
      console.error("[LEAD-TG-FAIL]", err);
    }
  }

  const headers = new Headers();
  headers.set("Location", `${origin}/reports/${slug}`);
  headers.append(
    "Set-Cookie",
    `tid_access=${token}; Path=/; Max-Age=${maxAge}; HttpOnly; Secure; SameSite=Lax`,
  );
  headers.append(
    "Set-Cookie",
    `tid_email=${encodeURIComponent(email)}; Path=/; Max-Age=${maxAge}; Secure; SameSite=Lax`,
  );
  return new Response(null, { status: 303, headers });
};

export const config = {
  path: "/.netlify/functions/request-access",
};
