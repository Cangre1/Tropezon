const navigation = require("@11ty/eleventy-navigation");
const seo = require("eleventy-plugin-seo");
const unpkgInliner = require("eleventy-njk-unpkg-inliner");
const site = require("./src/_data/site.js");
const transforms = require("./utils/transforms.js");

module.exports = function(eleventyConfig) {
    eleventyConfig.setTemplateFormats([
        "md",
        "jpg",
        "mp4",
        "njk",
    ]);

    // ASSETS
    eleventyConfig.addPassthroughCopy('src/assets');
    eleventyConfig.addPassthroughCopy('src/robots.txt');

    // TEMPLATES
    eleventyConfig.addLayoutAlias('default', 'layouts/base.njk');
    
    eleventyConfig.addPlugin(navigation);

    eleventyConfig.addPlugin(seo, {
        title: site.title,
        description: site.description,
        image: site.siteImage,
        options: {
            titleDivider: "|",
            twitterCardType: "summary_large_image",
        }
      });
    
    // SHORTCODES
    eleventyConfig.addNunjucksAsyncShortcode('inline', unpkgInliner);

    // DEEP DATA MERGE
    eleventyConfig.setDataDeepMerge(true);

    // Transforms
    Object.keys(transforms).forEach((transformName) => {
        eleventyConfig.addTransform(transformName, transforms[transformName]);
    });

    return {
        dir: {
            input: 'src',
            output: 'dist'
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
    }

}
