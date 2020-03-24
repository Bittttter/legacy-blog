/** @jsx jsx */
import {
  jsx,
  Box,
  Heading,
  Text,
  Container,
  Flex,
  Link,
} from 'theme-ui';
import { Fragment, useEffect } from 'react';
import { graphql, Link as GatsbyLink } from 'gatsby';
import Image from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Tag, ScrollToTop } from '@components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useSEO } from '../hooks/use-seo';
// import {
//   useCurrentInViewport,
//   CurrentInViewportProvider,
// } from '../hooks/use-current-in-viewport';

// const IOC = ({ items }) => {
//   const [current] = useCurrentInViewport();

//   return (
//     <div
//       sx={{
//         position: 'sticky',
//         top: 0,
//         height: '1px',
//         overflow: 'visible',
//         '@media screen and (max-width: 1200px)': {
//           display: 'none',
//         },
//       }}>
//       <Box
//         sx={{
//           position: 'absolute',
//           right: '8rem',
//           maxWidth: '25rem',
//         }}>
//         <Heading as="h2" variant="medium">
//           Table of Contents
//         </Heading>
//         <ul
//           sx={{
//             mt: 3,
//             padding: 0,
//             'li:not(:last-of-type)': {
//               marginBottom: 2,
//             },
//           }}>
//           {items.map(item => (
//             <li key={item.title}>
//               <Link
//                 href={item.url}
//                 alt={item.title}
//                 sx={{
//                   color:
//                     current === item.url.slice(1)
//                       ? 'highlight'
//                       : 'text',
//                   fontSize: 3,
//                   textDecoration: 'none',
//                   variant: 'no-underline',
//                 }}>
//                 {item.title}
//                 {current}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </Box>
//     </div>
//   );
// };

export default function PostLayout({ data, pageContext }) {
  const [, setSEOInfo] = useSEO();

  const {
    frontmatter,
    body,
    fields: { slug },
    excerpt,
  } = data.mdx;

  const { title, date, cover, tags } = frontmatter;
  const { previous, next } = pageContext;

  useEffect(() => {
    setSEOInfo({
      description: excerpt,
      title,
      image: cover.publicURL,
      pathname: slug,
      article: true,
    });
  }, []);

  return (
    <Fragment>
      <Container p={[3, 4]} variant="article">
        <Heading as="h2" my={2}>
          {title}
        </Heading>
        <Text variant="timestamp">{date}</Text>
        <Box
          mt={3}
          sx={{
            width: '100%',
            'a:not(:first-of-type)': {
              ml: 3,
            },
          }}>
          {tags.map(tag => (
            <Tag key={tag} url={`/tag/${tag}`}>
              {tag}
            </Tag>
          ))}
        </Box>
      </Container>
      <Image
        fluid={cover.childImageSharp.fluid}
        alt="cover image"
        sx={{
          my: 3,
          width: '100%',
        }}
      />
      <Container px={[3, 4]} variant="article">
        <MDXRenderer>{body}</MDXRenderer>
      </Container>
      <Flex
        sx={{
          mt: 4,
          px: 3,
          flexDirection: 'column',
          alignItems: 'center',
          'a:last-of-type': {
            mt: 3,
          },
        }}>
        {previous ? (
          <Link
            as={GatsbyLink}
            sx={{ fontSize: 5 }}
            to={previous.fields.slug}>
            <FaArrowLeft sx={{ verticalAlign: 'middle' }} />{' '}
            {previous.frontmatter.title}
          </Link>
        ) : null}
        {next ? (
          <Link
            as={GatsbyLink}
            sx={{ fontSize: 5 }}
            to={next.fields.slug}>
            {next.frontmatter.title}{' '}
            <FaArrowRight sx={{ verticalAlign: 'middle' }} />
          </Link>
        ) : null}
      </Flex>
      <Flex
        sx={{
          justifyContent: 'flex-end',
          mr: [3, 6],
          alignItems: 'center',
          my: 4,
        }}>
        <ScrollToTop />
      </Flex>
    </Fragment>
  );
}

export const query = graphql`
  query BlogPostQuery($id: String) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      excerpt(pruneLength: 160)
      tableOfContents
      timeToRead
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
        tags
        cover {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;
