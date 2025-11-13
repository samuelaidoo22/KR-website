import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kyidomfoods.com'),
  title: 'Kyidom Foods Company Ltd | Premium Ghanaian Rice & Services',
  description:
    'Kyidom Foods Company Ltd delivers premium Ghanaian rice, value-added services, and community impact initiatives supporting local farmers.',
  openGraph: {
    title: 'Kyidom Foods Company Ltd',
    description:
      'Premium Ghanaian rice, farmer training, processing services, and community development by Kyidom Foods Company Ltd.',
    url: 'https://www.kyidomfoods.com',
    siteName: 'Kyidom Foods',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kyidom Foods Company Ltd',
    description:
      'Kyidom Foods Company Ltd transforms Ghanaian rice through premium products, services, and impact initiatives.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-brown-50 text-brown-900">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}