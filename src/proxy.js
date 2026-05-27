import { NextResponse } from "next/server";

export function proxy(request) {
  const host = (request.headers.get("host") || "").toLowerCase();

  // If the user accesses via the non-www apex domain, automatically redirect them to www
  if (host.includes("unitedpay4africa.com") && !host.includes("www.unitedpay4africa.com")) {
    const targetUrl = new URL(
      request.nextUrl.pathname + request.nextUrl.search,
      "https://www.unitedpay4africa.com"
    );
    return NextResponse.redirect(targetUrl, 307);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
