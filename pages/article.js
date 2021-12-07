import React from 'react';
import Head from 'next/head';
import Header from '../components/Header/Header';
import ListBody from '../components/ListBody/ListBody';

const List = () => (
  <>
    <Head>
      <title>Article List</title>
      <meta name="description" content="next.js app" />
      <link rel="icon" href="/unlock-icon.svg" />
    </Head>
    <Header />
    <ListBody />
  </>
);

export default List;
