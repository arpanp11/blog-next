import Head from 'next/head';
import Header from './Header';
import Search from './Search';

export default function Layout({ title, children, keywords, description }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
      </Head>

      <Header />
      <Search />

      <main className='container mx-auto my-7'>{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  title: 'Welcome to DevSpace',
  keywords: 'development, coding, programming',
  description:
    'The best information and news about programming and development.',
};
