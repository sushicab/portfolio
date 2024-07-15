import type { Metadata } from "next";
import { Autour_One, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YIFAN ZHUANG",
  description: "portfolio。",
  icons: {
    icon: [
      { rel: "icon", href: "/favicon.ico" },
      { rel: "icon", href: "/favicon-16x16.png", sizes: "16x16" },
      { rel: "icon", href: "/favicon-32x32.png", sizes: "32x32" },
      { rel: "icon", href: "/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "icon", href: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/android-chrome-192x192.png" sizes="192x192" />
        <link rel="icon" href="/apple-touch-icon.png" sizes="180x180" />
      </head>
      <body
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#E3E3E3",
        }}
        className={inter.className}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
