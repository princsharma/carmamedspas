/**
 * Detects legacy WordPress URLs that should return HTTP 410 Gone.
 * Used after migrating from a hacked WordPress install with spam indexing.
 */

/** /YYYY/MM/DD/... date-based permalinks (spam; never used for real content). */
const WP_DATE_PERMALINK_RE = /^\/\d{4}\/\d{2}\/\d{2}(?:\/.*)?$/;

const EXCLUDED_PREFIXES = ["/_next", "/api", "/_vercel"] as const;

const EXCLUDED_EXACT = new Set([
  "/favicon.ico",
  "/robots.txt",
  "/sitemap.xml",
  "/gone",
]);

/** Paths middleware should not process. */
export function shouldSkipGoneCheck(pathname: string): boolean {
  if (EXCLUDED_EXACT.has(pathname)) return true;
  return EXCLUDED_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

/** True when the request matches a legacy WordPress URL pattern. */
export function isWordPressGoneUrl(
  pathname: string,
  searchParams: URLSearchParams,
): boolean {
  if (WP_DATE_PERMALINK_RE.test(pathname)) return true;

  if (searchParams.has("p")) return true;
  if (searchParams.has("page_id")) return true;
  if (searchParams.has("attachment_id")) return true;

  return false;
}
