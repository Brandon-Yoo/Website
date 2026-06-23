import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap"
});

const siteUrl = "https://brandonyoo.com";
const siteName = "brandon yoo";
const siteDescription = "engineer, scientist, artist.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`
  },
  description: siteDescription,
  keywords: [
    "Brandon Yoo",
    "chemical engineering",
    "health sciences",
    "AI R&D",
    "computational biology",
    "dance"
  ],
  authors: [{ name: "Brandon Yoo", url: siteUrl }],
  creator: "Brandon Yoo",
  alternates: {
    canonical: "/"
  },
  formatDetection: {
    telephone: false
  },
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: siteName,
    description: siteDescription,
    creator: "@BrandonWSYoo"
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-dvh antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          skip to content
        </a>
        <Header />
        {children}</body>
    </html>
  );
}
