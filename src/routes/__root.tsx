import { TanStackDevtools } from "@tanstack/react-devtools";
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { MotionConfig } from "motion/react";

import { AppToaster } from "@/components/layout/app-toaster";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import {
  ThemeProvider,
  useHtmlClass,
} from "@/components/layout/theme-provider";
import { personJsonLd } from "@/lib/json-ld";

import appCss from "../styles.css?url";

const THEME_BOOTSTRAP = `(function(){try{var t=localStorage.getItem('theme')||'auto';var v=['light','dark','auto'].includes(t)?t:'auto';var r=v==='auto'?(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):v;document.documentElement.classList.add(r);if(v==='auto')document.documentElement.classList.add('auto');document.documentElement.style.colorScheme=r}catch(e){var r=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.classList.add(r,'auto');document.documentElement.style.colorScheme=r}})()`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Jeet Gangwar - Full-stack Developer" },
      {
        name: "description",
        content:
          "Full-stack developer working with React, Node.js, and PostgreSQL. Based in Uttarakhand, India.",
      },
      { property: "og:title", content: "Jeet Gangwar — Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Full-stack developer working with React, Node.js, and PostgreSQL. Based in Uttarakhand, India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jeetgr.dev" },
      { property: "og:image", content: "https://jeetgr.dev/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Jeet Gangwar — Full-Stack Developer" },
      {
        name: "twitter:description",
        content:
          "Full-stack developer working with React, Node.js, and PostgreSQL.",
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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(personJsonLd),
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const htmlClass = useHtmlClass();
  return (
    <html lang="en" className={htmlClass} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP }}
          suppressHydrationWarning
        />
        <HeadContent />
      </head>
      <body>
        <MotionConfig reducedMotion="user">
          <ThemeProvider>
            <Navbar />
            {children}
            <Footer />
            <AppToaster />
          </ThemeProvider>
        </MotionConfig>
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
