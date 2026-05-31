import { NextResponse } from "next/server";

export function proxy(request) {
  // Temporarily take the entire website offline until the mobile app is complete.
  // Returning an empty 503 Service Unavailable response satisfies the requirement
  // that "nothing is returned" while following SEO best practices (so search engines
  // know the site is only temporarily down and don't de-index it).
  return new NextResponse("", {
    status: 503,
    headers: {
      "Retry-After": "86400", // Suggest checking back in 24 hours
      "Content-Type": "text/plain",
    },
  });
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
