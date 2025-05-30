import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StoreProvider from '@/components/StoreProvider';

export const metadata: Metadata = {
  title: 'Next Pokédex',
  description: 'Pokédex created with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <StoreProvider>
          <main className="bg-gray-500">
            <div className="min-h-[calc(100vh-81px)] md:max-w-[80vw] mx-auto bg-white">
              {children}
            </div>
          </main>
        </StoreProvider>
        <Footer />
      </body>
    </html>
  );
}
