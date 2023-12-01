// https://bnijenhuis.nl/notes/automatically-generate-open-graph-images-in-eleventy/
// concerts SVG to JPEG for open graph images

const fs = require("fs");
const Image = require("@11ty/eleventy-img");

const svgToJpeg = function () {
  const socialPreviewImagesDir = "dist/assets/images/social-preview/";
  fs.readdir(socialPreviewImagesDir, (err, files) => {
    if (!!files && files.length > 0) {
      files.forEach((fileName) => {
        if (fileName.endsWith(".svg")) {
          let imageUrl = socialPreviewImagesDir + fileName;
          Image(imageUrl, {
            formats: ["jpeg"],
            outputDir: "./" + socialPreviewImagesDir,
            filenameFormat: function (id, src, width, format, options) {
              let outputFileName = fileName.substring(0, fileName.length - 4);
              return `${outputFileName}.${format}`;
            },
          });
        }
      });
    } else {
      console.log("⚠ No social images found");
    }
  });
};

const deletePostsFolder = function () {
  const postsFolder = "dist/posts";
  fs.rm(postsFolder, { recursive: true }, (err) => {
    if (err) {
      console.log("⚠ Error deleting posts folder", err);
    } else {
      console.log("✅ Deleted posts folder");
    }
  });
};

module.exports = {
  svgToJpeg,
  deletePostsFolder,
};
