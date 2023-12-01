const markdownIt = require("markdown-it");
const markdownItPrism = require("markdown-it-prism");
const markdownItClass = require("@toycode/markdown-it-class");
const markdownItLinkAttributes = require("markdown-it-link-attributes");
const markdownItEmoji = require("markdown-it-emoji");
const markdownItFootnote = require("markdown-it-footnote");
const markdownitMark = require("markdown-it-mark");
const markdownitAbbr = require("markdown-it-abbr");

const markdownLib = markdownIt({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
})
  .disable("code")
  .use(markdownItPrism, {
    defaultLanguage: "plaintext",
  })
  .use(markdownItClass, {
    ol: "list",
    ul: "list",
  })
  .use(markdownItLinkAttributes, [
    {
      // match external links
      matcher(href) {
        return href.match(/^https?:\/\//);
      },
      attrs: {
        target: "_blank",
        rel: "noopener",
      },
    },
  ])
  .use(markdownItEmoji)
  .use(markdownItFootnote)
  .use(markdownitMark)
  .use(markdownitAbbr);

module.exports = markdownLib;
