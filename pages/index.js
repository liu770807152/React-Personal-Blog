import React from 'react';
import Header from '../components/Header/Header';
import Meta from '../components/Meta/Meta';
import fetcher from '../utils/fetcher';

const Home = ({ catalog }) => (
  <>
    <Meta />
    <Header catalog={catalog} />
  </>
);

export const getStaticProps = async () => {
  const catalogList = await fetcher(`/api/catalogList`);
  return {
    props: { catalog: catalogList }
  };
};

export default Home;
