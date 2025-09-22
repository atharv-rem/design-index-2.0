import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preload", href: "/fonts/CalSans.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
  { rel: "preload", href: "/fonts/Fustat.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
  { rel: "preload", href: "/fonts/Outfit.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://cdn.databuddy.cc/databuddy.js"
          data-client-id={import.meta.env.VITE_DATABUDDY_CLIENT_ID}
          data-track-sessions="false"
          data-track-outgoing-links="true"
          data-enable-batching="true"
          crossOrigin="anonymous"
          async
        ></script>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
         <link rel="icon" href="/logo_light.svg" type="image/svg+xml" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/logo_dark.svg" type="image/svg+xml" media="(prefers-color-scheme: dark)" />
        <style>{`
          @font-face {
            font-family: 'Outfit';
            font-style: normal;
            font-weight: 400 900;
            font-display: swap;
            src: url('/fonts/Outfit.woff2') format('woff2');
          }
          @font-face {
            font-family: 'Fustat';
            font-style: normal;
            font-weight: 200 800;
            font-display: swap;
            src: url('/fonts/Fustat.woff2') format('woff2');
          }
          @font-face {
            font-family: 'Cal Sans';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url('/fonts/CalSans.woff2') format('woff2');
          }
        `}</style>
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}