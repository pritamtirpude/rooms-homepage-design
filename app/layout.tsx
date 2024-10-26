import React from 'react';
import type { Metadata } from 'next';
import { League_Spartan as LeagueSpartan } from 'next/font/google';
import './globals.css';

const leagueSpartan = LeagueSpartan({
  subsets: ['latin'],
  weight: ['500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Rooms | Stunning and Responsive Web Designs',
  description:
    'Explore a curated collection of innovative web designs and intuitive user experiences crafted for modern users. Dive into seamless, responsive layouts built with accessibility and style in mind.',
  keywords: [
    'web design',
    'responsive design',
    'Next.js',
    'UI/UX',
    'accessibility',
    'modern design'
  ],
  robots: 'index, follow'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.className} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
