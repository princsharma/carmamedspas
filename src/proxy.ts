import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  isWordPressGoneUrl,
  shouldSkipGoneCheck,
} from "@/lib/wordpress-gone";

const GONE_CACHE_CONTROL = "public, max-age=86400, stale-while-revalidate=604800";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (shouldSkipGoneCheck(pathname)) {
    return NextResponse.next();
  }

  if (!isWordPressGoneUrl(pathname, request.nextUrl.searchParams)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/gone";
  url.search = "";

  const response = NextResponse.rewrite(url, { status: 410 });
  response.headers.set("Cache-Control", GONE_CACHE_CONTROL);
  return response;
}

export const config = {
  matcher: [
    /*
     * Run on all paths except static assets and Next internals.
     * WordPress query URLs (/?p=…) are still matched via searchParams in proxy.
     */
    "/((?!_next/static|_next/image|favicon.ico|llms.txt|robots.txt|sitemap.xml|images/).*)",
  ],
};
