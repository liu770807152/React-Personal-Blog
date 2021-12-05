import React from 'react';
import Head from 'next/head';
import Header from '../components/Header/Header';
import Body from '../components/Body/Body';

const List = () => (
	<>
		<Head>
			<title>Chris Blog List</title>
			<meta name='description' content='next.js app' />
			{/* <link rel='icon' href='/favicon.ico' /> */}
		</Head>
		<Header />
		<Body />
	</>
);

export default List;
