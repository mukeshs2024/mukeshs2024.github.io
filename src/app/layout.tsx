import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const bodyFont = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });
const headingFont = IBM_Plex_Mono({ subsets: ["latin"], weight: ["700"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "MUKESH.SYS | Cloud Engineer",
  description:
    "Cloud Engineer focused on scalable cloud infrastructure, AI systems, backend engineering, and production-ready software.",
  keywords: ["Mukesh S", "Cloud Engineer", "AI Systems", "Backend Engineering"],
  authors: [{ name: "Mukesh S" }],
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "MUKESH.SYS | Cloud Engineer",
    description: "Cloud Engineer focused on scalable cloud infrastructure, AI systems, backend engineering, and production-ready software.",
    type: "website",
  }
};

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
