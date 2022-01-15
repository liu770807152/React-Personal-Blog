import React from 'react';
import Meta from '../../components/Meta';
import ListBody from '../../components/ListBody';
import fetcher from '../../utils/fetcher';
import { SWRConfig } from 'swr';

const List = ({ fallback }) => (
  <SWRConfig value={{ fallback }}>
    <Meta />
    <ListBody />
  </SWRConfig>
);

export async function getStaticProps() {
  const articleList = await fetcher('/api/articleList');
  return {
    props: {
      fallback: {
        '/api/articleList': articleList
      }
    }
  };
}

export default List;
