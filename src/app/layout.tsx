import { ReactNode } from 'react';
import type { Metadata } from 'next';
import 'kku-ui/lib/styles/index.css';
import './layout.scss';
import { Header, Main, Footer } from '@/layout';
import SplineWrapper from '@/components/spline/spline';
import PageLoader from '@/components/common/pageLoader/pageLoader';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <PageLoader />
        <div className="kku__body__wrapper">
          <Header />
          <Main>
            <SplineWrapper />
            {children}
          </Main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
