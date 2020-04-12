require(`dotenv`).config();
const { createProxyMiddleware } = require('http-proxy-middleware');

const siteMetadata = {
  title: `Lei Huang`,
  description: `Lei Huang is a frontend developer. He writes about web development and design.`,
  image: `/default-site-image.jpg`,
  siteUrl: `https://leihuang.dev`,
  siteLanguage: `en-US`,
  siteLocale: `en_us`,
  twitterUsername: `@imleihuang`,
  author: `Lei Huang`,
  favicon: `./static/android-chrome-512x512.png`,
  keywords: ['frontend', 'JavaScript', 'React', 'CSS'],
  themeColor: '#2b7a78',
  backgroundColor: '#feffff',
};

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    `@pauliescanlon/gatsby-mdx-embed`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-emotion`,
    `gatsby-remark-autolink-headers`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-import-code`,
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1152,
              linkImagesToOriginal: false,
              tracedSVG: true,
            },
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `noopener`,
            },
          },
          {
            resolve: 'gatsby-remark-code-titles',
          },
          {
            resolve: '@weknow/gatsby-remark-codepen',
            options: {
              theme: 'dark',
              height: 450,
            },
          },
        ],
        rehypePlugins: [
          // require(`./plugins/rehype-sections`),
          require(`rehype-accessible-emojis`).rehypeAccessibleEmojis,
        ],
      },
      plugin: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 680,
          },
        },
      ],
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/pages`,
    //     name: `pages`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lei Huang`,
        short_name: `LH`,
        start_url: `/`,
        background_color: siteMetadata.backgroundColor,
        theme_color: siteMetadata.themeColor,
        display: `standalone`,
        icon: siteMetadata.favicon,
      },
    },
    {
      resolve: `gatsby-plugin-webpack-bundle-analyzer`,
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: `static`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ 'content:encoded': node.html }],
                });
              });
            },
            query: `
              {
                allMdx(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: {
                      frontmatter: {published: {eq:true}}
                      fileAbsolutePath: { regex: "/(posts)/" }
                  }
                ) {
                  nodes {
                    excerpt
                    html
                    fields { 
                      slug 
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: `${siteMetadata.title} Feed`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lora\:400,400i,500,500i,600,600i,700,700i`,
          `Nunito`,
          `Source Code Pro`,
        ],
        display: 'swap',
      },
    },
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-netlify`, // must be last
  ],
  developMiddleware: (app) => {
    app.use(
      '/api/',
      createProxyMiddleware({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/api/': '',
        },
      })
    );
  },
};
