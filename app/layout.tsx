import type { Metadata } from 'next';
import { Autour_One, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
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
          width: '100%',
          minHeight: '100vh',
          backgroundColor: 'white',
          overflowX: 'hidden',
        }}
        className={inter.className}
      >
        <Navbar />
        <Analytics />
        <SpeedInsights />

        {children}
        <Footer
          name="YIFAN ZHUANG"
          email="zhuangyifan01@gmail.com"
          featuredImage="/img/top/render2.jpg"
          socialLinks={{
            instagram: 'https://www.instagram.com/wandanle.z/',
            linkedin: 'www.linkedin.com/in/yifanzhuang01',
            threads: 'https://threads.net/@yourusername',
          }}
        />
      </body>
    </html>
  );
}

// command + > 0 auto import library
