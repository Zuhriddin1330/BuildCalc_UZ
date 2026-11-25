import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";

function RootLayout() {
  return (
    <html lang="uz">
      <head>
        <HeadContent />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>BuildCalc UZ</title>
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}

export const Route = createRootRoute({ component: RootLayout });