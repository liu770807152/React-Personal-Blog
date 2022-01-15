import React from 'react';
import Meta from '../../components/Meta';
import DetailBody from '../../components/DetailBody';
import { SWRConfig } from 'swr';
import fetcher from '../../utils/fetcher';

const Detail = ({ fallback, id }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Meta />
      <DetailBody id={id} />
    </SWRConfig>
  );
};

export async function getStaticProps(context) {
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

export async function getStaticPaths() {
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
