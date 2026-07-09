import { TanStackDevtools } from "@tanstack/react-devtools";
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { MotionConfig } from "motion/react";

import { AppToaster } from "@/components/layout/app-toaster";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/lib/theme-context";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Jeet Gangwar - Full-stack Developer" },
      {
        name: "description",
        content:
          "Full-stack web developer specializing in React, Node.js, and PostgreSQL. Building fast, reliable applications end to end.",
      },
      { property: "og:title", content: "Jeet Gangwar — Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Full-stack web developer specializing in React, Node.js, and PostgreSQL. Building fast, reliable applications end to end.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jeetgr.dev" },
      { property: "og:image", content: "https://jeetgr.dev/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Jeet Gangwar — Full-Stack Developer" },
      {
        name: "twitter:description",
        content:
          "Full-stack web developer specializing in React, Node.js, and PostgreSQL.",
      },
      { name: "twitter:image", content: "https://jeetgr.dev/og-image.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://jeetgr.dev" },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon-256.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon-256.png" },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider>
          <MotionConfig reducedMotion="user">
            <Navbar />
            {children}
            <Footer />
            <AppToaster />
          </MotionConfig>
        </ThemeProvider>
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
