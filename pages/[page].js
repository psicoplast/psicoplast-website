import { renderToStaticMarkup } from 'react-dom/server';
import { getPageSlugs } from '../common/static';

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
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
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
  try {
    const markdown = await import(`../content/pages/${page}.md`);
    const { attributes, react: Content } = markdown;
    return {
      props: {
        page: { attributes, content: renderToStaticMarkup(<Content />) }
      }
    };
  } catch (e) {
    return { error: true };
  }
};
