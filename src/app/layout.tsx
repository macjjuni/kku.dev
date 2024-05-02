import { ReactNode } from 'react';
import type { Metadata } from 'next';
import 'kku-ui/lib/styles/index.css';
import './layout.scss';
import { Header, Main, Footer } from '@/layout';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div className="kku__body__wrapper">
          <Header />
          <Main>{children}</Main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
