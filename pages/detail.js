import React from 'react';
import Head from 'next/head';
import Header from '../components/Header/Header';
import DetailBody from '../components/DetailBody/DetailBody';
import Footer from '../components/Footer/Footer';

const Detail = () => (
	<>
		<Head>
			<title>Chris Blog List</title>
			<meta name='description' content='next.js app' />
			<link rel='icon' href='/unlock-icon.svg' />
		</Head>
		<Header />
		<DetailBody />
		<Footer />
	</>
);

export default Detail;
