import { NextResponse } from "next/server";

export function middleware(request: any) {
  const url = request.nextUrl;

  if (url.searchParams.get("app") === "mta") {
    return NextResponse.rewrite(
      "https://mta-ada-alerts.vercel.app" + url.pathname,
    );
  }

  return NextResponse.rewrite(
    "https://watch-later-topaz.vercel.app" + url.pathname,
  );
}
