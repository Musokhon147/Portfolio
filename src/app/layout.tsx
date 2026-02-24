import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Portfolio — Full-Spectrum Developer",
    template: "%s | Portfolio",
  },
  description:
    "Full-spectrum developer building apps, websites, games, VR experiences, and hardware projects. From idea to reality — if it can be built with a laptop, I can build it.",
  keywords: [
    "developer",
    "portfolio",
    "web developer",
    "game developer",
    "VR developer",
    "Unity",
    "React",
    "Next.js",
    "full-stack",
    "frontend",
    "backend",
    "hardware",
    "IoT",
  ],
  authors: [{ name: "Portfolio" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Portfolio — Full-Spectrum Developer",
    description:
      "I build apps, websites, games, VR experiences, and anything in between. Full-spectrum developer turning ideas into reality.",
    siteName: "Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — Full-Spectrum Developer",
    description:
      "I build apps, websites, games, VR experiences, and anything in between.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className="scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${syne.variable} ${dmSans.variable} font-[family-name:var(--font-dm)] antialiased`}
      >
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||(t!=="dark"&&window.matchMedia("(prefers-color-scheme:light)").matches)){document.documentElement.classList.add("light")}}catch(e){}})()`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
