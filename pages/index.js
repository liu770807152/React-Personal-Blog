import React from 'react';
import Meta from '../components/Meta';
import { SWRConfig } from 'swr';

const Home = () => (
  <>
    <Meta />
  </>
);

// export const getStaticProps = async () => {
//   const catalogList = await fetcher(`/api/catalogList`);
//   return {
//     props: { catalog: catalogList }
//   };
// };

export default Home;
