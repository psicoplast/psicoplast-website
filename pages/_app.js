import Head from 'next/head';
import Link from '../components/link';
import navigation from '../.build/navigation.json';

const App = ({ Component, pageProps }) => {
  return (
    <div className="container">
      <Head>
        <title>Psicoplast</title>
      </Head>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            {navigation.map(({ slug, title }) => (
              <li key="slug">
                <Link href={`/${slug}`}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>Footer here</footer>
    </div>
  );
};

export default App;
