import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Syne, DM_Sans, Playfair_Display, Bebas_Neue, Inter } from "next/font/google";
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

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
      "We build apps, websites, games, VR experiences, and anything in between. Full-spectrum developers turning ideas into reality.",
    siteName: "Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — Full-Spectrum Developer",
    description:
      "We build apps, websites, games, VR experiences, and anything in between.",
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
        className={`${syne.variable} ${dmSans.variable} ${playfair.variable} ${bebas.variable} ${inter.variable} font-[family-name:var(--font-dm)] antialiased`}
      >
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t!=="dark"){document.documentElement.classList.add("light")}}catch(e){}})()`,
          }}
        />
        {/* Light mode floating blobs */}
        <div className="portfolio-blob portfolio-blob-left" />
        <div className="portfolio-blob portfolio-blob-right" />
        {children}
      </body>
    </html>
  );
}
