/** @jsx jsx */
import { jsx, Container, Box, Heading, Text, Link } from 'theme-ui';
import { graphql, Link as GatsbyLink } from 'gatsby';
import { format } from 'date-fns';
import { Tag } from '@components';
import { useEffect } from 'react';
import { useSEO } from '../hooks/use-seo';

export default ({ data, pageContext }) => {
  const [, setSEOInfo] = useSEO();
  useEffect(() => {
    setSEOInfo({
      description: `Posts with tag ${pageContext.tag}`,
      title: `Tag ${pageContext.tag}`,
      pathname: `/tag/${pageContext.tag}`,
      article: false,
    });
  }, []);
  return (
    <Container sx={{ p: 3 }}>
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
            {/* <Image
        sx={{
          mb: 3,
          height: ['22rem', '44rem'],
          objectFit: 'cover',
        }}
        fluid={post.frontmatter.cover.childImageSharp.fluid}
        alt="cover image"
      /> */}
            <Text as="p" variant="body">
              {post.excerpt}
            </Text>
          </Box>
        ))}
      </Box>
    </Container>
  );
  //   const {
  //     description,
  //     title,
  //     image,
  //     siteUrl,
  //     siteLanguage,
  //     siteLocale,
  //     twitterUsername,
  //   } = useSiteMetadata();

  // return <Dump {...data} />;
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
