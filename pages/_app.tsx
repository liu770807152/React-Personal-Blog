import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import 'antd/dist/antd.css';
import '../styles/globals.scss';
import '../styles/code.css';
import Layout from '../components/Layout/Layout';
import React from 'react';

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
