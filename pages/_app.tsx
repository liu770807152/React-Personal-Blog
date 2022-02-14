import React from 'react';
import { Provider } from 'react-redux';
import store from '@redux/store';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import 'antd/dist/antd.css';
import '../styles/globals.scss';
import '../styles/code.css';
import Layout from '../components/Layout/Layout';


type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}
