/** @jsx jsx */
import { jsx, Box, Heading, Text, Link } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { graphql, Link as GatsbyLink } from 'gatsby';
import Image from 'gatsby-image';
import { Tag, MainBio, Layout } from '@components';

const showArticles = keyframes`
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Home = ({ data }) => {
  const { nodes: posts } = data.allMdx;
  return (
    <Layout
      description="Lei Huang is a frontend developer from China. He specializes in web development and web design."
      title="Lei Huang"
      pathname="/">
      <MainBio mt={5} mb={4} />
      <Box
        sx={{
          '@media screen and (min-width: 1200px)': {
            opacity: 0,
            transform: 'translateY(10rem)',
            animation: `${showArticles.toString()} 1s ease-in-out .6s forwards`,
          },
        }}>
        <Text sx={{ fontSize: [7, 8], fontWeight: 'heading' }}>
          Recent posts:
        </Text>
        <hr />
        {posts.map(post => (
          <Box key={post.id} mt={4}>
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
            <Text variant="timestamp">{post.frontmatter.date}</Text>
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
            <Image
              sx={{
                mb: 3,
                height: ['22rem', '44rem'],
                objectFit: 'cover',
              }}
              fluid={post.frontmatter.cover.childImageSharp.fluid}
              alt="cover image"
            />
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
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { published: { eq: true } }
        fileAbsolutePath: { regex: "/(posts)/" }
      }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          tags
          date(formatString: "MMMM Do, YYYY")
          cover {
            publicURL
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        tableOfContents
        timeToRead
        fields {
          slug
        }
      }
    }
  }
`;

export default Home;
