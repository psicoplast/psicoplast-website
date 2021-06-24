const pluginSass = require('eleventy-plugin-sass');
const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPlugin(pluginSass, {
    watch: ['sass/*', '!node_modules/**'],
    outputDir: './_site/css'
  });

  eleventyConfig.addPassthroughCopy('img');
  //eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('admin');

  /* Markdown Overrides */
  let markdownLibrary = markdownIt({ html: true }).use(markdownItAttrs);
  eleventyConfig.setLibrary('md', markdownLibrary);
  return {};
};
