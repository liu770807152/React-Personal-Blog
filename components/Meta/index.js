import Head from 'next/head';

const Meta = ({ title, keywords, description }) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="keywords" content={keywords} />
    <meta name="description" content={description} />
    <meta charSet="utf-8" />
    <link rel="icon" href="/unlock-icon.svg" />
    <title>{title}</title>
  </Head>
);

Meta.defaultProps = {
  title: 'Chris workshop',
  keywords: 'technical blog, web development, programming',
  description: 'Welcome to my workshop!'
};

export default Meta;
