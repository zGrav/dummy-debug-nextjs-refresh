import { NextMiddleware, NextResponse } from "next/server";

const middleware: NextMiddleware = (() => {
  return () => NextResponse.next();
})();

export default middleware;

export const config = {
  matcher: [
    {
      source: "/((?!api|_next/static|_next/data|_next/webpack-hmr).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
