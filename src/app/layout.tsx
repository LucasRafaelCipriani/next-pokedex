import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StoreProvider from '@/components/StoreProvider';
import Main from '@/components/Main';

export const metadata: Metadata = {
  title: 'Next Pokédex',
  description: 'Pokédex created with Next.js',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <StoreProvider>
          <Main>{children}</Main>
        </StoreProvider>
        <Footer />
      </body>
    </html>
  );
}
