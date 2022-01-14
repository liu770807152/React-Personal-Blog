import 'antd/dist/antd.css';
import '../styles/globals.css';
import '../styles/code.css';
import Footer from '../components/Footer/Footer';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
