import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Rex Host | High-Performance Game & Server Hosting',
  description:
    'High-Performance Game, VPS, and Minecraft Server Hosting. Powering Gamers and Communities with Zero Compromises.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-body antialiased flex min-h-screen flex-col animated-background`}>
        <div className="bg-primary text-primary-foreground text-center py-2 px-4 text-sm font-medium">
          🔥 Limited Time Offer! Use code REX20 for 20% off your first month!
        </div>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
