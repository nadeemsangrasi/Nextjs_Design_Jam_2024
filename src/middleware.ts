import { clerkClient, clerkMiddleware } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export default clerkMiddleware(async (auth, req: NextRequest) => {
  const { userId } = auth();
  const currentUrl = new URL(req.url);
  if (
    !userId &&
    (currentUrl.pathname.startsWith("/cart") ||
      currentUrl.pathname.startsWith("/tracking"))
  ) {
    const signInUrl = new URL("/sign-in", req.url);
    return NextResponse.redirect(signInUrl);
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",

    "/(api|trpc)(.*)",
    "/sign-in/:path*",
    "/sign-up/:path*",
    "/cart/:path*",
    "/tracking/:path*",
  ],
};
