import { NextResponse } from "next/server";

export function proxy(request) {
  const host = (request.headers.get("host") || "").toLowerCase();

  // Redirect any traffic from the old unitedpay4africa.com domain to the official upa.africa domain
  if (host.includes("unitedpay4africa.com")) {
    const targetUrl = new URL(
      request.nextUrl.pathname + request.nextUrl.search,
      "https://upa.africa"
    );
    return NextResponse.redirect(targetUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
