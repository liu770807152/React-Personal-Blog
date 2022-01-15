import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { SWRConfig } from 'swr';
import fetcher from '../../utils/fetcher';

export default function Layout({ children }) {
  return (
    <SWRConfig value={{ fetcher: fetcher }}>
      <Header />
      {children}
      <Footer />
    </SWRConfig>
  );
}
