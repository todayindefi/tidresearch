/**
 * Handles institutional-report access requests (capture-and-grant).
 *
 * Accepts a form-urlencoded or JSON POST with { name, email, firm, use_case, slug }.
 * Mints an HMAC-signed token (matching netlify/edge-functions/gate.ts), sets
 * cookies directly on the response, and redirects straight to the report. No
 * email round-trip — same model DocSend uses by default.
 *
 * Lead data is written to the function log with a [LEAD] prefix (Netlify →
 * Functions → Logs). Grep or pipe to a spreadsheet if you want more durable
 * storage later.
 *
 * Required env vars (set in Netlify dashboard):
 *   GATE_HMAC_SECRET   Shared with gate.ts.
 *   CURRENT_KID        Active key id (e.g. "v1"). Rotate to revoke en masse.
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
  console.log(
    "[DEBUG] process.env keys:",
    Object.keys(process.env).sort().join(","),
  );
  // @ts-expect-error Netlify global present at runtime.
  const nfDefined = typeof Netlify !== "undefined";
  console.log("[DEBUG] Netlify global defined:", nfDefined);
  console.log(
    "[DEBUG] via getEnv — GATE:",
    !!getEnv("GATE_HMAC_SECRET"),
    "KID:",
    !!getEnv("CURRENT_KID"),
    "ORIGIN:",
    !!getEnv("SITE_ORIGIN"),
  );

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

  if (!name || !firm || !useCase || !slug) return badRequest("Missing required fields");
  if (!EMAIL_RE.test(email)) return badRequest("Invalid email");
  if (!/^[a-z0-9-]+$/.test(slug)) return badRequest("Invalid slug");

  const exp = Math.floor(Date.now() / 1000) + ttlDays * 86400;
  const token = await mintToken({ email, slug, exp, kid }, secret);
  const maxAge = Math.max(1, exp - Math.floor(Date.now() / 1000));

  // Lead record — appears in Netlify function logs with a grep-friendly prefix.
  console.log(
    "[LEAD] " +
      JSON.stringify({
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
      }),
  );

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
