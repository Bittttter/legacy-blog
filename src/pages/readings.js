/** @jsx jsx */
import {
  jsx,
  Container,
  Text,
  Flex,
  Box,
  Image,
  Link,
} from 'theme-ui';
import { graphql, StaticQuery } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import { useState, useEffect } from 'react';
import wretch from 'wretch';
import { keyframes } from '@emotion/core';
import { Loader, Layout } from '@components';

const channelProfileQuery = graphql`
  query ChannelProfileQuery {
    avatar: file(
      absolutePath: { regex: "/telegram-channel-profile-pic/" }
    ) {
      childImageSharp {
        fixed(width: 90, height: 90, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const PostCard = props => {
  return (
    <Box
      sx={{
        borderRadius: '2rem',
        p: 3,
        mt: 4,
        backgroundColor: 'muted',
        boxShadow: t => `0 .3rem .8rem ${t.colors.primary}`,
      }}>
      <Text as="p" variant="timestamp">
        {props.Time}
      </Text>
      <Box sx={{ my: 2 }}>
        <Text as="p" sx={{ fontSize: 3 }}>
          {props.Content}
        </Text>
        {props.Img ? (
          <Image
            src={props.Img}
            sx={{
              maxHeight: '50rem',
              display: 'block',
              margin: 'auto',
              mt: 2,
            }}
          />
        ) : null}
      </Box>
      <Link
        href={props.Link}
        target="_blank"
        rel="noopener"
        sx={{ fontSize: 2 }}>
        View in Telegram channel
      </Link>
    </Box>
  );
};

const fadeInArticles = keyframes`
  to {
      opacity: 1;
      transform: translate3d(0,0px,0);
    },
`;

const Readings = () => {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    wretch('/api/telegram-feeds/')
      .signal(controller)
      .get()
      .json(res => {
        const { feeds, totalPages } = res;
        setPosts(feeds);
        setTotalPages(totalPages);
      })
      .catch(() => {});
    return () => controller.abort();
  }, []);

  return (
    <Layout>
      {posts.length ? (
        <StaticQuery
          query={channelProfileQuery}
          render={data => (
            <Container px={3} mt={4}>
              <Flex mt={4}>
                <GatsbyImage
                  fixed={data.avatar.childImageSharp.fixed}
                  sx={{ borderRadius: '50%', mr: [3, 4] }}
                />
                <Box sx={{ flex: 1 }}>
                  <Link
                    variant="styles.a"
                    sx={{ fontSize: 4 }}
                    target="_blank"
                    rel="noopener"
                    href="https://t.me/bibliotherapy2/">
                    Bibliotherapy
                  </Link>
                  <Text variant="body" sx={{ mt: 2 }}>
                    Synched from a Telegram channel where I post
                    excerpts or my notes on books I've recently read.
                  </Text>
                </Box>
              </Flex>
              {posts.map((post, index) => {
                return (
                  <Box
                    key={post._rowNumber}
                    sx={{
                      opacity: 0,
                      transform: 'translate3d(0,-5rem,0)',
                      animation: `${fadeInArticles.toString()} 1s ease-out ${index *
                        0.3}s forwards`,
                    }}>
                    <PostCard {...post} />
                  </Box>
                );
              })}
            </Container>
          )}
        />
      ) : (
        <Flex my={6} sx={{ justifyContent: 'center' }}>
          <Loader />
        </Flex>
      )}
    </Layout>
  );
};

export default Readings;
