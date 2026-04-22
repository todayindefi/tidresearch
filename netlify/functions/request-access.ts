/**
 * Handles institutional-report access requests.
 *
 * Accepts a form-urlencoded or JSON POST with { name, email, firm, use_case, slug }.
 * Mints an HMAC-signed token (matching netlify/edge-functions/gate.ts) and sends
 * two emails via Resend: a tokenized link to the requester, and a request
 * summary to OPS_EMAIL. Redirects to /thanks-institutional on success.
 *
 * Required env vars (set in Netlify dashboard):
 *   GATE_HMAC_SECRET   Shared with gate.ts.
 *   CURRENT_KID        Active key id (e.g. "v1").
 *   RESEND_API_KEY     Resend transactional email key.
 *   FROM_EMAIL         e.g. "research@tidresearch.com" (must be verified in Resend).
 *   OPS_EMAIL          Where request notifications are sent.
 * Optional env vars:
 *   SITE_ORIGIN        Override base URL, default "https://tidresearch.com".
 *   TOKEN_TTL_DAYS     Default 60.
 */
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

function htmlEscape(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    c === "&"
      ? "&amp;"
      : c === "<"
        ? "&lt;"
        : c === ">"
          ? "&gt;"
          : c === '"'
            ? "&quot;"
            : "&#39;",
  );
}

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

async function sendEmail(
  apiKey: string,
  body: { from: string; to: string; subject: string; html: string; reply_to?: string },
): Promise<void> {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Resend error ${res.status}: ${detail}`);
  }
}

export default async (request: Request) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const secret = process.env.GATE_HMAC_SECRET;
  const kid = process.env.CURRENT_KID ?? "v1";
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.FROM_EMAIL;
  const opsEmail = process.env.OPS_EMAIL;
  const origin = process.env.SITE_ORIGIN ?? "https://tidresearch.com";
  const ttlDays = Number(process.env.TOKEN_TTL_DAYS ?? 60);

  if (!secret || !apiKey || !fromEmail || !opsEmail) {
    console.error("Missing env: GATE_HMAC_SECRET / RESEND_API_KEY / FROM_EMAIL / OPS_EMAIL");
    return new Response("Server not configured", { status: 500 });
  }

  let body: Record<string, string>;
  try {
    body = await parseBody(request);
  } catch {
    return badRequest("Invalid body");
  }

  // Honeypot — silently drop
  if ((body["bot-field"] ?? "").trim()) {
    return Response.redirect(`${origin}/thanks-institutional`, 303);
  }

  const name = (body.name ?? "").trim().slice(0, 120);
  const email = (body.email ?? "").trim().toLowerCase().slice(0, 160);
  const firm = (body.firm ?? "").trim().slice(0, 160);
  const useCase = (body.use_case ?? "").trim().slice(0, 600);
  const slug = (body.slug ?? "").trim().slice(0, 80);

  if (!name || !firm || !useCase || !slug) return badRequest("Missing required fields");
  if (!EMAIL_RE.test(email)) return badRequest("Invalid email");
  if (!/^[a-z0-9-]+$/.test(slug)) return badRequest("Invalid slug");

  const exp = Math.floor(Date.now() / 1000) + ttlDays * 86400;
  const token = await mintToken({ email, slug, exp, kid }, secret);
  const link = `${origin}/reports/${slug}?t=${encodeURIComponent(token)}`;
  const expiryDate = new Date(exp * 1000).toISOString().slice(0, 10);

  const requesterHtml = `
    <p>Hi ${htmlEscape(name.split(" ")[0] || name)},</p>
    <p>Thanks for requesting access to the TID Research institutional risk report for
    <strong>${htmlEscape(slug)}</strong>. Your tokenized link is below — it stays
    active until <strong>${expiryDate}</strong> and works across devices when you
    visit from the same browser.</p>
    <p><a href="${link}" style="display:inline-block;padding:12px 18px;background:#000;color:#fff;text-decoration:none;font-family:monospace;">Open the report</a></p>
    <p style="font-size:13px;color:#555">If the button doesn't work, paste this URL into your browser:<br><span style="word-break:break-all">${htmlEscape(link)}</span></p>
    <p style="font-size:13px;color:#555">Questions or follow-up? Just reply to this email.</p>
    <p style="font-size:13px;color:#555">— TID Research</p>
  `;

  const opsHtml = `
    <p><strong>Institutional report access request</strong></p>
    <ul>
      <li><strong>Report:</strong> ${htmlEscape(slug)}</li>
      <li><strong>Name:</strong> ${htmlEscape(name)}</li>
      <li><strong>Email:</strong> ${htmlEscape(email)}</li>
      <li><strong>Firm:</strong> ${htmlEscape(firm)}</li>
      <li><strong>Use case:</strong> ${htmlEscape(useCase)}</li>
      <li><strong>Token expires:</strong> ${expiryDate} (kid=${htmlEscape(kid)})</li>
    </ul>
    <p style="font-size:13px;color:#555">Access link already sent to the requester.</p>
  `;

  try {
    await sendEmail(apiKey, {
      from: fromEmail,
      to: email,
      subject: "Your TID Research institutional report access",
      html: requesterHtml,
      reply_to: opsEmail,
    });
    await sendEmail(apiKey, {
      from: fromEmail,
      to: opsEmail,
      subject: `Access request · ${slug} · ${firm}`,
      html: opsHtml,
      reply_to: email,
    });
  } catch (e) {
    console.error(e);
    return new Response("Email send failed", { status: 502 });
  }

  // Classic form submission → redirect back to thanks page.
  return Response.redirect(`${origin}/thanks-institutional`, 303);
};

export const config = {
  path: "/.netlify/functions/request-access",
};
