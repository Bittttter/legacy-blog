const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@assets': path.resolve(__dirname, 'content/assets'),
      },
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  // Create tags page
  const tagsRes = await graphql(`
    {
      allMdx(
        filter: {
          fileAbsolutePath: { regex: "/(posts)/" }
          frontmatter: { published: { eq: true } }
        }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  if (tagsRes.error) {
    reporter.panicOnBuild('🚨  ERROR: querying tags');
  }

  tagsRes.data.allMdx.group.forEach(tag => {
    createPage({
      path: `/tag/${tag.fieldValue}`,
      component: path.resolve('./src/templates/tag.js'),
      context: {
        tag: tag.fieldValue,
      },
    });
  });

  const postsRes = await graphql(
    `
      query {
        allMdx(
          filter: {
            fileAbsolutePath: { regex: "/(posts)/" }
            frontmatter: { published: { eq: true } }
          }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          nodes {
            id
            excerpt(pruneLength: 250)
            fields {
              slug
            }
            frontmatter {
              tags
              title
              date(formatString: "YYYY MMMM Do")
            }
          }
        }
      }
    `
  );

  if (postsRes.error) {
    reporter.panicOnBuild('🚨  ERROR: querying posts');
  }

  const posts = postsRes.data.allMdx.nodes;

  posts.forEach((post, index) => {
    const previous =
      index === posts.length - 1 ? null : posts[index + 1];
    const next = index === 0 ? null : posts[index - 1];

    createPage({
      path: post.fields.slug,
      component: path.resolve('src/templates/post.js'),
      context: {
        slug: post.fields.slug,
        previous,
        next,
        id: post.id,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
