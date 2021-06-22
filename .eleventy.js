const pluginSass = require("eleventy-plugin-sass");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginSass, {
    watch: ['sass/*.{scss,sass}', '!node_modules/**'],
    outputDir: 'css'
  });

  eleventyConfig.addPassthroughCopy('img');
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('admin');
  return {};
};
