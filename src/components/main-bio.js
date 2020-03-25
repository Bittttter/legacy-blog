/** @jsx jsx */
import { jsx, Box, Flex, Text, NavLink } from 'theme-ui';
import { graphql, StaticQuery } from 'gatsby';
import { keyframes } from '@emotion/core';
import Image from 'gatsby-image';
import SOCIAL from '../constants/social';

const mainBioQuery = graphql`
  query MainBioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 250, height: 250, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const showText = keyframes`
  to {
    opacity: 1
  }
`;

const bounceInDown = keyframes`
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    0% {
      opacity: 0;
      transform: translate3d(0, -1000px, 0);
    }

    60% {
      opacity: 1;
      transform: translate3d(0, 25px, 0);
    }

    75% {
      transform: translate3d(0, -10px, 0);
    }

    90% {
      transform: translate3d(0, 5px, 0);
    }

    to {
      transform: translate3d(0, 0, 0);
    }
`;

export const MainBio = props => {
  return (
    <StaticQuery
      query={mainBioQuery}
      render={data => {
        return (
          <Box
            {...props}
            sx={{
              display: 'flex',
              flexDirection: ['column', 'row'],
              alignItems: 'center',
              justifyContent: 'space-between',
              '@media screen and (min-width: 992px)': {
                width: '135%',
                marginLeft: '50%',
                transform: 'translateX(-50%)',
              },
            }}>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              sx={{
                width: '25rem',
                borderRadius: '50%',
                border: 'double .6rem transparent',
                backgroundImage: t =>
                  `linear-gradient(white, white), linear-gradient(150deg, ${t.colors.primary}, ${t.colors.secondary}, ${t.colors.highlight})`,
                backgroundOrigin: 'border-box',
                backgroundClip: 'content-box, border-box',
                mb: [3, 0],
                mr: [0, 4, 4],
                animationName: bounceInDown.toString(),
                animationDuration: '1s',
                animationFillMode: 'both',
              }}
              alt="Profile image of Lei Huang"
            />
            <Box
              sx={{
                flex: 1,
                opacity: 0,
                animation: `${showText.toString()} 1s ease-in-out forwards`,
              }}>
              <Text variant="heading">
                Hello!{' '}
                <Text as="span" color="primary">
                  Lei Huang
                </Text>{' '}
                is a front-end developer, life hacker, and avid
                learner.
              </Text>
              <Flex
                mt={2}
                sx={{
                  'a:not(:first-of-type)': {
                    ml: 4,
                  },
                }}>
                {SOCIAL.map(({ url, kind, Icon }) => (
                  <NavLink
                    key={kind}
                    href={url}
                    target="_blank"
                    rel="noopener"
                    aria-label={`navigate to my ${kind} page`}>
                    <Icon />
                  </NavLink>
                ))}
              </Flex>
              <Text variant="body" mt={3}>
                I taught myself programming and eventually made it my
                career a few years ago. I have two years of fulltime
                working experience as a front-end developer, including
                one year at Alipay. Before that, I was a content
                marketing specialist at a sales company.
              </Text>
              <Text variant="body" mt={2}>
                I constantly seek opportunities to learn and to hone
                my skills. I’m now focused on design systems and
                JAMstack.
              </Text>
            </Box>
          </Box>
        );
      }}
    />
  );
};
