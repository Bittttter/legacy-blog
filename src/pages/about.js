/** @jsx jsx */
import {
  jsx,
  Text,
  Box,
  Heading,
  Grid,
  Styled,
  Link,
} from 'theme-ui';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { Circle, Line, Layout } from '@components';
import { useEffect, useState } from 'react';
import useIntersect from '../hooks/use-intersect';
import { techSkills, toolsProficiency } from '../constants/skills';

const About = ({ data }) => {
  const [animateBar, setAnimateBar] = useState(false);
  const [barChartRef, barChartEnt] = useIntersect({ threshold: 0.4 });

  useEffect(() => {
    if (barChartEnt.intersectionRatio > 0) {
      setAnimateBar(true);
    }
  }, [barChartEnt]);

  return (
    <Layout
      description="Lei Huang is a frontend developer from China. He specializes in web development and web design."
      title="About Lei Huang"
      image={data.avatar.publicURL}
      pathname="/about/">
      <Text
        sx={{
          fontSize: [8, 9],
          fontWeight: 'bold',
          fontFamily: 'heading',
          textAlign: 'center',
          my: [4, 5],
        }}>
        Hi there!
      </Text>
      <Box my={4} sx={{ textAlign: 'center' }}>
        <Image
          fluid={data.avatar.childImageSharp.fluid}
          alt="Profile image of Lei Huang"
          sx={{ width: '100%' }}
        />
        <Text variant="body" mt={3} sx={{ fontStyle: 'italic' }}>
          Just a serious coder at work.
        </Text>
      </Box>
      <Text as="p" variant="emphasis">
        I'm Lei Huang, a frontend engineer from China. I taught myself
        programming and eventually made it my career a few years ago.
        I have two years of fulltime working experience as a front-end
        developer, including one year at Alipay. Before that, I was a
        content marketing specialist at a sales company.
      </Text>
      <Text as="p" variant="emphasis">
        My main focus is user experience and web performance. For now,
        I mostly work with JavaScript and React to build web apps. But
        I also dabble in web design. I'm improving my proficiency on
        design systems and JAMstack at the moment.
      </Text>
      <Text as="p" variant="emphasis">
        Although JavaScript is the language I use the most, Haskell is
        my favorite. Writing denotative code gives me a sense of
        elevation. It's an experience I don't get from writing
        JavaScript. Sometimes I choose to be impractical to appreciate
        the beauty of the universe...
      </Text>
      <Styled.blockquote>
        <Styled.p sx={{ fontSize: [5, 6] }}>
          Like the concept of brunch, Clojure is so elegant that it’s
          difficult to tell anyone anything about it without somehow
          improving them.
        </Styled.p>
      </Styled.blockquote>
      <Text as="p" variant="emphasis">
        This quote from{' '}
        <Link
          href="https://www.braveclojure.com/"
          target="_blank"
          rel="noopener">
          Clojure for the Brave and True
        </Link>{' '}
        speaks to my heart about functional programming.
      </Text>
      <Box
        sx={{
          height: '.1rem',
          width: '100%',
          my: 4,
          background: t =>
            `linear-gradient(to right, ${t.colors.highlight}, ${t.colors.secondary})`,
        }}
      />
      <Heading as="h2">Tech skills</Heading>
      <Grid
        columns={['1fr 1fr', '1fr 1fr 1fr', '1fr 1fr 1fr 1fr']}
        sx={{ justifyItems: 'center', mt: 4 }}>
        {techSkills.map(item => (
          <Circle
            key={item.skill}
            strokeColor={item.color}
            percentage={item.percentage}
            skill={item.skill}
          />
        ))}
      </Grid>
      <Box
        sx={{
          height: '.1rem',
          width: '100%',
          my: 4,
          background: t =>
            `linear-gradient(to right, ${t.colors.highlight}, ${t.colors.secondary})`,
        }}
      />
      <Heading as="h2">Tools proficiency</Heading>
      <Box ref={barChartRef} mt={4}>
        {toolsProficiency.map(item => (
          <Line
            mb={4}
            key={item.tool}
            percentage={item.percentage}
            skill={item.tool}
            animate={animateBar}
          />
        ))}
      </Box>
    </Layout>
  );
};

export const pageQuery = graphql`
  query bioPicQuery {
    avatar: file(absolutePath: { regex: "/profile-at-work/" }) {
      publicURL
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
export default About;
