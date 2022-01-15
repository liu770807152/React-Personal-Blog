import 'antd/dist/antd.css';
import '../styles/globals.css';
import '../styles/code.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SWRConfig } from 'swr';
import fetcher from '../utils/fetcher';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher: fetcher }}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </SWRConfig>
  );
}
