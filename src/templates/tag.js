/** @jsx jsx */
import { jsx, Box, Heading, Text, Link } from 'theme-ui';
import { graphql, Link as GatsbyLink } from 'gatsby';
import { format } from 'date-fns';
import { Tag, Layout } from '@components';

export default ({ data, pageContext }) => {
  return (
    <Layout
      description={`Posts with tag ${pageContext.tag}`}
      title={`Tag ${pageContext.tag}`}
      pathname={`/tag/${pageContext.tag}`}
      article={false}>
      <Heading as="h1">
        Posts with tag{' '}
        <span sx={{ color: 'highlight' }}>{pageContext.tag}</span>:
      </Heading>
      <hr />
      <Box mt={4}>
        {data.allMdx.nodes.map(post => (
          <Box key={post.id}>
            <Link as={GatsbyLink} to={post.fields.slug}>
              <Heading
                as="h2"
                sx={{
                  my: 3,
                  color: 'primary',
                }}>
                {post.frontmatter.title}
              </Heading>
            </Link>
            <Text variant="timestamp">
              {format(Date.parse(post.frontmatter.date), 'PPP')}
            </Text>
            <Box
              sx={{
                my: 3,
                'a:not(:first-of-type)': {
                  ml: [2, 3],
                },
              }}>
              {post.frontmatter.tags.map(tag => (
                <Tag key={tag} url={`/tag/${tag}`}>
                  {tag}
                </Tag>
              ))}
            </Box>

            <Text as="p" variant="body">
              {post.excerpt}
            </Text>
          </Box>
        ))}
      </Box>
    </Layout>
  );
};

export const query = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: {
        fileAbsolutePath: { regex: "/(posts)/" }
        frontmatter: { tags: { in: [$tag] }, published: { eq: true } }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        fields {
          slug
        }
        frontmatter {
          title
          date
          tags
        }
      }
    }
  }
`;
