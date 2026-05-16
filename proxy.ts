import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (pathname.startsWith("/project/watchLater")) {
    return NextResponse.rewrite(
      new URL(`https://watch-later-topaz.vercel.app${pathname}`),
    );
  }
  if (pathname.startsWith("/project/mtaTracker")) {
    return NextResponse.rewrite(
      new URL(`https://mta-ada-alerts.vercel.app${pathname}`),
    );
  }

  return NextResponse.next();
}
