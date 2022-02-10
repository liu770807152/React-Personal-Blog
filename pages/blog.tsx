import React from 'react';
import Meta from '../components/Meta/Meta';
import ListBody from '../components/ListBody/ListBody';
import fetcher from '../utils/fetcher';
import { SWRConfig } from 'swr';
import { GetStaticProps } from 'next';

const List = ({ fallback }) => (
	<SWRConfig
		value={{
			fallback,
		}}
	>
		<Meta />
		<ListBody />
	</SWRConfig>
);

export const getStaticProps: GetStaticProps = async () => {
	const articleList = await fetcher('/api/articleList');
	return {
		props: {
			fallback: {
				'/api/articleList': articleList,
			},
		},
	};
};

export default List;
