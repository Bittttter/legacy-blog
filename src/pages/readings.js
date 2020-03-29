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
import useInfiniteScroll from '../hooks/use-infinite-scroll';
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
  const [hasNextPage, setHasNextPage] = useState(true);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  let controller;
  if (typeof window !== 'undefined') {
    controller = new AbortController();
  }

  function handleLoadMore() {
    setLoading(true);
    wretch('/api/telegram-feeds/')
      .query({ pageNo })
      .signal(controller)
      .get()
      .json(data => {
        setLoading(false);
        setHasNextPage(!data.isLastPage);
        setPosts([...posts, ...data.feeds]);
        setPageNo(pageNo + 1);
      })
      .catch(e => {
        console.log(e);
      });
  }

  const infiniteRef = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: handleLoadMore,
  });

  useEffect(() => {
    return () => controller.abort();
  }, []);

  return (
    <Layout
      description="Reading notes synched from a Telegram channel where I post excerpts or my notes on books I've recently read."
      title="Reading Notes"
      pathname="/readings/">
      <div ref={infiniteRef}>
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
                      excerpts or my notes on books I've recently
                      read.
                    </Text>
                  </Box>
                </Flex>
              </Container>
            )}
          />
        ) : null}
        {posts.map((post, index) => {
          return (
            <Box
              key={post.Link}
              sx={{
                opacity: 0,
                transform: 'translate3d(0,-5rem,0)',
                animation: `${fadeInArticles.toString()} .6s ease-out ${(index %
                  10) *
                  0.3}s forwards`,
              }}>
              <PostCard {...post} />
            </Box>
          );
        })}
        {loading ? (
          <Flex sx={{ justifyContent: 'center', mt: 4 }}>
            <Loader />
          </Flex>
        ) : null}
      </div>
    </Layout>
  );
};

export default Readings;
