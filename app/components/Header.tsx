"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "home", href: "/" }
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.09] bg-black/70 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          aria-label="brandon yoo — home"
          className="inline-flex items-center focus:outline-none focus:ring-2 focus:ring-cyan-300/60 focus:ring-offset-2 focus:ring-offset-black"
        >
          <svg
            viewBox="0 0 64 64"
            className="h-7 w-7"
            role="img"
            aria-hidden="true"
          >
            <rect width="64" height="64" fill="#000000" />
            <text
              x="50%"
              y="50%"
              dominantBaseline="central"
              textAnchor="middle"
              fill="#ffffff"
              fontFamily="Arial, Helvetica, sans-serif"
              fontSize="38"
              fontWeight="600"
            >
              유
            </text>
          </svg>
        </Link>

        <nav aria-label="primary" className="flex items-center gap-6">
          {tabs.map((tab) => {
            const active = isActive(pathname, tab.href);
            return (
              <Link
                key={tab.href}
                href={tab.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-300/60 focus:ring-offset-2 focus:ring-offset-black ${
                  active ? "text-zinc-100" : "text-zinc-500 hover:text-zinc-100"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 transition-colors duration-200 hover:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-cyan-300/60 focus:ring-offset-2 focus:ring-offset-black"
          >
            resume
          </a>
        </nav>
      </div>
    </header>
  );
}
