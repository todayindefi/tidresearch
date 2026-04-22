/**
 * Gate for institutional reports.
 *
 * Runs before the static HTML is served. Looks for an HMAC-signed token in
 * `?t=<token>` or cookie `tid_access`. If valid, optionally issues the cookie
 * and serves through. If missing or invalid, redirects to the request form.
 *
 * The list of gated slugs is built into gated-slugs.json at build time from
 * any content entry with `audience: "institutional"`. Future paired reports
 * gate automatically with no per-report wiring here.
 *
 * Required env vars:
 *   GATE_HMAC_SECRET    HMAC key used to sign and verify tokens.
 *   CURRENT_KID         Active key id (e.g. "v1"). Rotate to revoke en masse.
 * Optional env vars:
 *   REVOKED_KIDS        Comma-separated list of kids to reject.
 *   REVOKED_EMAILS      Comma-separated list of emails to reject.
 */
import type { Config, Context } from "https://edge.netlify.com/";
import gatedSlugs from "./gated-slugs.json" with { type: "json" };

interface TokenPayload {
  email: string;
  slug: string;
  exp: number;
  kid: string;
}

const TE = new TextEncoder();
const TD = new TextDecoder();

function b64urlEncode(bytes: Uint8Array): string {
  let s = "";
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function b64urlDecode(s: string): Uint8Array {
  const pad = 4 - (s.length % 4 || 4);
  const padded = (s + (pad < 4 ? "=".repeat(pad) : "")).replace(/-/g, "+").replace(/_/g, "/");
  const bin = atob(padded);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
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

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

async function verifyToken(
  token: string,
  secret: string,
): Promise<TokenPayload | null> {
  const parts = token.split(".");
  if (parts.length !== 2) return null;
  const [payloadB64, sigB64] = parts;
  const expected = await hmacSign(secret, payloadB64);
  if (!timingSafeEqual(expected, sigB64)) return null;
  let payload: TokenPayload;
  try {
    payload = JSON.parse(TD.decode(b64urlDecode(payloadB64)));
  } catch {
    return null;
  }
  if (typeof payload.exp !== "number" || payload.exp < Math.floor(Date.now() / 1000)) {
    return null;
  }
  return payload;
}

function getCookie(header: string | null, name: string): string | null {
  if (!header) return null;
  for (const part of header.split(";")) {
    const [k, ...v] = part.trim().split("=");
    if (k === name) return v.join("=");
  }
  return null;
}

function parseList(env: string | undefined): Set<string> {
  if (!env) return new Set();
  return new Set(
    env
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
  );
}

export default async function gate(request: Request, context: Context) {
  const url = new URL(request.url);

  // Extract the report slug from /reports/<slug> or /reports/<slug>/anything
  const match = url.pathname.match(/^\/reports\/([^/]+)/);
  const slug = match?.[1];
  if (!slug) return; // pass through

  // Only gate slugs the build said are institutional.
  const gatedList = gatedSlugs as string[];
  if (!gatedList.includes(slug)) return; // pass through

  // Never gate the request form itself or sub-routes that aren't the report.
  if (url.pathname !== `/reports/${slug}` && url.pathname !== `/reports/${slug}/`) {
    return;
  }

  const secret = Deno.env.get("GATE_HMAC_SECRET");
  if (!secret) {
    // Fail closed if the gate isn't configured; send to the form and log it.
    console.error("GATE_HMAC_SECRET not set — failing closed");
    return Response.redirect(`${url.origin}/reports/${slug}/request`, 302);
  }

  const revokedKids = parseList(Deno.env.get("REVOKED_KIDS"));
  const revokedEmails = parseList(Deno.env.get("REVOKED_EMAILS"));

  const queryToken = url.searchParams.get("t");
  const cookieToken = getCookie(request.headers.get("Cookie"), "tid_access");

  let accepted: TokenPayload | null = null;
  let acceptedToken: string | null = null;

  if (queryToken) {
    const p = await verifyToken(queryToken, secret);
    if (p && p.slug === slug && !revokedKids.has(p.kid) && !revokedEmails.has(p.email)) {
      accepted = p;
      acceptedToken = queryToken;
    }
  }
  if (!accepted && cookieToken) {
    const p = await verifyToken(cookieToken, secret);
    if (p && p.slug === slug && !revokedKids.has(p.kid) && !revokedEmails.has(p.email)) {
      accepted = p;
      acceptedToken = cookieToken;
    }
  }

  if (!accepted || !acceptedToken) {
    return Response.redirect(`${url.origin}/reports/${slug}/request`, 302);
  }

  // If the token came in via query, issue cookies + clean URL (remove ?t=).
  // tid_access carries the signed token (HttpOnly for defense-in-depth).
  // tid_email carries just the email for the watermark overlay (readable by JS).
  if (queryToken && acceptedToken === queryToken) {
    const cleanUrl = new URL(url);
    cleanUrl.searchParams.delete("t");
    const maxAge = Math.max(1, accepted.exp - Math.floor(Date.now() / 1000));
    const headers = new Headers();
    headers.set("Location", cleanUrl.pathname + cleanUrl.search);
    headers.append(
      "Set-Cookie",
      `tid_access=${acceptedToken}; Path=/; Max-Age=${maxAge}; HttpOnly; Secure; SameSite=Lax`,
    );
    headers.append(
      "Set-Cookie",
      `tid_email=${encodeURIComponent(accepted.email)}; Path=/; Max-Age=${maxAge}; Secure; SameSite=Lax`,
    );
    return new Response(null, { status: 302, headers });
  }

  // Valid cookie — serve the static HTML, passing through.
  return;
}

export const config: Config = {
  // Declare broadly; the function itself filters by gatedSlugs.
  path: "/reports/*",
};
