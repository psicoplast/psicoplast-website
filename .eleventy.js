const pluginSass = require("eleventy-plugin-sass");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginSass, {
    watch: ['sass/*', '!node_modules/**'],
    outputDir: './css'
  });
  eleventyConfig.addWatchTarget("./scss/");
  eleventyConfig.setBrowserSyncConfig({
		files: './_site/css/**/*.css'
	});

  eleventyConfig.addPassthroughCopy('img');
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('admin');
  return {};
};
