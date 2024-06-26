import type { Metadata } from "next";
import { Autour_One, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YIFAN  ZHUANG",
  description: "portfolio。",
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/public/favicon/favicon-32x32.png",
      },
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
      <body
        style={{
          //paddingTop: "80px",
          width: "100vw",
          height: "100wh",
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

// command + > 0 auto import library
