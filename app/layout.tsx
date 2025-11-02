import type { Metadata } from 'next';
import './globals.css';
import Head from 'next/head';


export const metadata: Metadata = {
  title: 'Mohammed Benbrahim',
  icons: {
    icon: '/ll2.jpg',
  },

};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        {/* Remove "public/" from the path */}
        <meta name="description" content="Created by Mohammed Benbrahim" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
