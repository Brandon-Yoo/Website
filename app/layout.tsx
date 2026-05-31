import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://brandonyoo.com"),
  title: {
    default: "brandon yoo",
    template: "%s | brandon yoo"
  },
  description:
    "personal website of brandon yoo, an engineering and health sciences student working across biology, software, and movement.",
  keywords: [
    "Brandon Yoo",
    "chemical engineering",
    "health sciences",
    "AI R&D",
    "computational biology",
    "dance"
  ],
  authors: [{ name: "Brandon Yoo" }],
  creator: "Brandon Yoo",
  openGraph: {
    title: "brandon yoo",
    description:
      "engineer, scientist, mover.",
    url: "https://brandonyoo.com",
    siteName: "brandon yoo",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "brandon yoo",
    description: "engineer, scientist, mover."
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
