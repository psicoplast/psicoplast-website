import Head from 'next/head';
import { useRouter } from 'next/router';
import { renderToStaticMarkup } from 'react-dom/server';
import fs from 'fs';
import path from 'path';

const getPageSlugs = () => {
  const pagesFolder = path.join(process.cwd(), './content/pages');
  const slugs = fs
    .readdirSync(pagesFolder)
    .map(file => file.substring(0, file.length - 3)); // Remove extension
  return slugs;
};

export default function Page(props) {
  if (props.error) {
    return null;
  } else {
    const {
      page: {
        attributes: { title, items },
        content
      },
      pages
    } = props;
    return (
      <div className="container">
        <Head>
          <title>Page - {title}</title>
        </Head>

        <main>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <nav>
            <ul>
              {pages.map(slug => (
                <li key={slug}>
                  <a href={`/${slug}`}>{slug}</a>
                </li>
              ))}
            </ul>
          </nav>
        </main>

        <footer></footer>
      </div>
    );
  }
}

export async function getStaticPaths() {
  const pages = getPageSlugs();
  return {
    paths: pages.map(slug => ({ params: { page: slug } })),
    fallback: false
  };
}

export const getStaticProps = async ({ params }) => {
  const { page } = params;
  const pages = getPageSlugs();
  try {
    const markdown = await import(`../content/pages/${page}.md`);
    const { attributes, react: Content } = markdown;
    return {
      props: {
        page: { attributes, content: renderToStaticMarkup(<Content />) },
        pages: pages
      }
    };
  } catch (e) {
    return { error: true };
  }
};
