const Image = require('@11ty/eleventy-img');
const path = require('path');
const htmlmin = require('html-minifier-terser');

const imageShortcodePlaceholder = async (
  src,
  alt,
  caption,
  sizes = '(min-width: 55rem) 820px, 100vw',
  classes = '',
  lazy = true
) => {
  if (!alt) {
    throw new Error(`Missing \`alt\` on myImage from: ${src}`);
  }

  let metadata = await Image(src, {
    widths: [320, 570, 820],
    formats: ['avif', 'webp', 'jpeg'],
    urlPath: '/assets/images/',
    outputDir: './dist/assets/images/'
  });

  let lowsrc = metadata.jpeg[metadata.jpeg.length - 1];

  // getting the url  to use
  let imgSrc = src;
  if (!imgSrc.startsWith('.') && !imgSrc.startsWith('http')) {
    const image = this.page.image;
    const pathParts = image.split('/');
    pathParts.pop();
    imgSrc = pathParts.join('/') + '/' + src;
  }

  return htmlmin.minify(
    `<figure>
     <picture>
    ${Object.values(metadata)
      .map(imageFormat => {
        return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat
          .map(entry => entry.srcset)
          .join(', ')}" sizes="${sizes}">`;
      })
      .join('\n')}
      <img
        src="/assets/images/image-placeholder.png"
        data-src="${lowsrc.url}"
        width="${lowsrc.width}"
        height="${lowsrc.height}"
        alt="${alt}"
				${lazy ? 'loading="lazy"' : ''}
        decoding="async"
        class="${classes}">
    </picture>
    ${
      caption
        ? `<figcaption class="cluster font-display"><p>${caption}</p>
	</figcaption>`
        : ``
    }
</figure>`,
    {collapseWhitespace: true}
  );
};

module.exports = imageShortcodePlaceholder;
