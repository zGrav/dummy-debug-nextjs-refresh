import {
  NextMiddleware,
  NextRequest,
  NextFetchEvent,
  NextResponse,
} from "next/server";

const middleware: NextMiddleware = (() => {
  const middlewareFactory =
    () =>
    async (request: NextRequest, _next: NextFetchEvent, ...rest) => {
      // console.log(request);
      // console.log(_next);
      // console.log(rest);

      return NextResponse.next();
    };

  return middlewareFactory();
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
