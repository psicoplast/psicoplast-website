const pluginSass = require('eleventy-plugin-sass');

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false); // Check the css folder

  eleventyConfig.addPlugin(pluginSass, {
    watch: ['sass/*', '!node_modules/**'],
    outputDir: './css'
  });

  eleventyConfig.addPassthroughCopy('img');
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('admin');
  return {};
};
