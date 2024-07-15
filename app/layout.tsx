import type { Metadata } from "next";
import { Autour_One, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YIFAN ZHUANG",
  description: "portfolio。",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/favicon-32x32.png",
    other: [
      { rel: "icon", url: "/favicon-64x64.png", sizes: "64x64" },
      { rel: "icon", url: "/favicon-128x128.png", sizes: "128x128" },
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/favicon-32x32.png" />
        <link rel="icon" sizes="64x64" href="/favicon-64x64.png" />
        <link rel="icon" sizes="128x128" href="/favicon-128x128.png" />
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
