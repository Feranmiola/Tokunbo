import type { Metadata } from 'next';
import { Montserrat, Milonga } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { AntdRegistry } from '@ant-design/nextjs-registry';

export const milonga = Milonga({ subsets: ['latin'], weight: ['400'] });
const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tokunbo',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <NextTopLoader showSpinner={false} />
        <AntdRegistry>
          <section className="grid min-h-screen grid-rows-[auto_1fr_auto]">
            <Header />
            {children}
            <Footer />
          </section>
        </AntdRegistry>
      </body>
    </html>
  );
}
