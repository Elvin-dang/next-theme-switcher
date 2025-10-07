import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@repo/ui/globals.css";
import "nextra-theme-docs/style.css";
import "next-theme-switcher/styles";
import { getPageMap } from "nextra/page-map";
import { Layout, Navbar } from "nextra-theme-docs";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Next Theme Switcher",
    template: `%s | Next Theme Switcher`,
  },
  description:
    "A simple and customizable theme switcher component for React and Next.js applications.",
  applicationName: "Next Theme Switcher",
  appleWebApp: {
    title: "Next Theme Switcher",
    statusBarStyle: "default",
    capable: true,
  },
  openGraph: {
    title: "Next Theme Switcher",
    description:
      "A simple and customizable theme switcher component for React and Next.js applications..",
    siteName: "Next Theme Switcher",
    url: "https://next-theme-switcher.elvindang.info/",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://next-theme-switcher.elvindang.info/og-image.png",
        width: 600,
        height: 600,
        alt: "Next Theme Switcher",
      },
    ],
  },
  twitter: {
    card: "summary",
  },
};

const navbar = (
  <Navbar
    logo={
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image src="/og-image.png" width={32} height={32} alt="Next Theme Switcher" />
        </Link>
        <div>
          <b className="text-xl select-none">Next Theme Switcher</b>
          <a
            href="https://elvindang.info"
            target="_blank"
            className="hidden sm:inline-block ml-2 text-xs opacity-50"
          >
            by Elvin Dang
          </a>
        </div>
      </div>
    }
    logoLink={false}
    projectLink="https://github.com/Elvin-dang/next-theme-switcher"
  />
);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/Elvin-dang/next-theme-switcher/tree/main/apps/web/app"
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
