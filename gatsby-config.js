module.exports = {
  siteMetadata: {
    title: "Mukul Jain",
    email: "jainmukul1996@gmail.com",
    github: "https://github.com/mukuljainx",
    twitter: "https://twitter.com/ion_reactor",
    siteUrl: `https://www.mukulja.in`,
    titleTemplate: "%s | Mukul Jain",
    description: "Personal Blog & Portfolio",
    image: "/images/snape.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@ion_reactor",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-transformer-json",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              inlineCodeMarker: "÷",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1024,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          "gatsby-remark-copy-linked-files",
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-84739802-3",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "./src/pages/posts/",
      },
      __key: "posts",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
