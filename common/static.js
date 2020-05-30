import { renderToStaticMarkup } from 'react-dom/server';
import fs from 'fs';
import path from 'path';

export const getPageSlugs = () => {
  const pagesFolder = path.join(process.cwd(), './content/pages');
  const slugs = fs
    .readdirSync(pagesFolder)
    .map(file => file.substring(0, file.length - 3)); // Remove extension
  return slugs;
};

export const getAllPages = async () => {};
