import React from 'react';
import Meta from '../../components/Meta/Meta';
import DetailBody from '../../components/DetailBody/DetailBody';
import { SWRConfig } from 'swr';
import fetcher from '../../utils/fetcher';
import { GetStaticProps, GetStaticPaths } from 'next'

const Detail = ({ fallback, id }) => (
  <SWRConfig value={{ fallback }}>
    <Meta />
    <DetailBody id={id} />
  </SWRConfig>
);

export const getStaticProps: GetStaticProps = async(context) => {
  const article = await fetcher(`/api/article/${context.params.id}`);
  return {
    props: {
      id: `${context.params.id}`,
      fallback: {
        [`/api/article/${context.params.id}`]: article
      }
    }
  };
}

export const getStaticPaths: GetStaticPaths = async() => {
  const articleList = await fetcher(`/api/articleList`);
  const ids = articleList.map((item) => item.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  // We'll pre-render only these paths at build time.
  return {
    paths,
    fallback: false
  };
}

export default Detail;
