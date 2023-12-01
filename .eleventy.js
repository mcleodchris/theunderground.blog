/**
 * I strive to keep the `.eleventy.js` file clean and uncluttered. Most adjustments must be made in:
 *  - `./config/collections/index.js`
 *  - `./config/filters/index.js`
 *  - `./config/plugins/index.js`
 *  - `./config/shortcodes/index.js`
 *  - `./config/transforms/index.js`
 */

// JSDoc comment: Hint VS Code for eleventyConfig autocompletion. © Henry Desroches - https://gist.github.com/xdesro/69583b25d281d055cd12b144381123bf

/**
 *  @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 */
// get package.json
const packageVersion = require("./package.json").version;

// module import filters
const {
  limit,
  toHtml,
  where,
  toISOString,
  formatDate,
  toAbsoluteUrl,
  stripHtml,
  mdInline,
  splitlines,
  jsonToString,
  sha256,
} = require("./config/filters/index.js");

// module import collections
const { getAllPosts } = require("./config/collections/index.js");

// module import events
const { svgToJpeg } = require("./config/events/index.js");

// plugins
const markdownLib = require("./config/plugins/markdown.js");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { slugifyString } = require("./config/utils");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const inclusiveLangPlugin = require("@11ty/eleventy-plugin-inclusive-language");
const bundlerPlugin = require("@11ty/eleventy-plugin-bundle");

module.exports = (eleventyConfig) => {
  // 	--------------------- Custom Watch Targets -----------------------
  eleventyConfig.addWatchTarget("./src/assets");
  eleventyConfig.addWatchTarget("./utils/*.js");

  // --------------------- layout aliases -----------------------
  eleventyConfig.addLayoutAlias("base", "base.njk");
  eleventyConfig.addLayoutAlias("home", "home.njk");

  // 	---------------------  Custom filters -----------------------
  eleventyConfig.addFilter("limit", limit);
  eleventyConfig.addFilter("where", where);
  eleventyConfig.addFilter("toHtml", toHtml);
  eleventyConfig.addFilter("toIsoString", toISOString);
  eleventyConfig.addFilter("formatDate", formatDate);
  eleventyConfig.addFilter("toAbsoluteUrl", toAbsoluteUrl);
  eleventyConfig.addFilter("stripHtml", stripHtml);
  eleventyConfig.addFilter("slugify", slugifyString);
  eleventyConfig.addFilter("toJson", JSON.stringify);
  eleventyConfig.addFilter("fromJson", JSON.parse);
  eleventyConfig.addFilter("md", mdInline);
  eleventyConfig.addFilter("splitlines", splitlines);
  eleventyConfig.addFilter("keys", Object.keys);
  eleventyConfig.addFilter("values", Object.values);
  eleventyConfig.addFilter("entries", Object.entries);
  eleventyConfig.addFilter("jsonToString", jsonToString);
  eleventyConfig.addFilter("sha256", sha256);

  // 	--------------------- Custom shortcodes ---------------------
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`); // current year, stephanie eckles
  eleventyConfig.addShortcode("packageVersion", () => `v${packageVersion}`);

  // 	--------------------- Custom collections -----------------------
  eleventyConfig.addCollection("posts", getAllPosts);

  // 	--------------------- Events ---------------------
  eleventyConfig.on("afterBuild", svgToJpeg);

  // 	--------------------- Plugins ---------------------
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.setLibrary("md", markdownLib);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(inclusiveLangPlugin, {
    words: "simply,obviously,basically,of course,clearly,everyone knows",
  });
  eleventyConfig.addPlugin(bundlerPlugin);

  // 	--------------------- Passthrough File Copy -----------------------
  // same path
  ["src/assets/fonts/", "src/assets/images/"].forEach((path) =>
    eleventyConfig.addPassthroughCopy(path)
  );

  // social icons to root directory
  eleventyConfig.addPassthroughCopy({
    "src/assets/images/favicon/*": "/",
  });

  // 	--------------------- general config -----------------------
  return {
    // Pre-process *.md, *.html and global data files files with: (default: `liquid`)
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",

    // Optional (default is set): If your site deploys to a subdirectory, change `pathPrefix`, for example with with GitHub pages
    pathPrefix: "/",

    dir: {
      output: "dist",
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
