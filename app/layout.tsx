import type { Metadata } from 'next';
import { Autour_One, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  description: 'portfolio。',
  icons: {
    icon: [
      { rel: 'icon', url: '/favicon.ico' },
      { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16' },
      { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', url: '/favicon-64x64.png', sizes: '64x64' },
      { rel: 'icon', url: '/favicon-128x128.png', sizes: '128x128' },
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
        <link rel="stylesheet" href="https://use.typekit.net/ads2rjj.css" />
      </head>
      <body
        style={{
          //paddingTop: "80px",
          width: '100vw',
          height: '100wh',
          backgroundColor: '#E3E3E3',
        }}
        className={inter.className}
      >
        <Navbar />
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}

// command + > 0 auto import library
