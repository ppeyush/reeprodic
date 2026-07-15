import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://reep.rodicconsultants.com'),
  title: 'REEP - RODIC Engineering Excellence Program',
  description: 'The RODIC Engineering Excellence Program pairs your faculty and research scholars with RODIC engineers on live national infrastructure projects.',
  openGraph: {
    title: 'REEP - RODIC Engineering Excellence Program',
    description: 'Your Next Breakthrough Shouldn\'t Live Only in a Lab. Join REEP for peer-reviewed research on live infrastructure.',
    images: [
      {
        url: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-[#011627] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
