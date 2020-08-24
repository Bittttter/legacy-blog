/** @jsx jsx */
import { jsx, Text, Box, Heading, Grid, Link, Flex } from 'theme-ui';
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
      description="Levi Wong is a frontend developer from China. He specializes in web development and web design."
      title="About Levi Wong"
      image={data.selfie.publicURL}
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
        <Flex>
          <Image
            fluid={data.selfie.childImageSharp.fluid}
            alt="Profile image of Levi Wong"
            sx={{ width: '100%', mr: [1, 2] }}
          />
          <Image
            fluid={data.cats.childImageSharp.fluid}
            alt="Cats"
            sx={{ width: '100%' }}
          />
        </Flex>
        <Text variant="body" mt={3} sx={{ fontStyle: 'italic' }}>
          Me and my cats.
        </Text>
      </Box>
      <Text as="p" variant="emphasis">
        I'm Levi Wong. I come from China, but I've never felt like a
        true Chinese. I taught myself programming and made it my
        career a few years ago. Currently, I'm working remotely for a
        crypto exchange platform, previously I worked for Alipay.
        Before all that, I was a content marketing specialist at a
        sales company.
      </Text>
      <Text as="p" variant="emphasis">
        My main focus is user experience and web performance. For now,
        I mostly work with JavaScript and React to build web apps. But
        I also dabble in web design.
      </Text>
      <Text as="p" variant="emphasis">
        My personality type is{' '}
        <Link
          href="https://www.16personalities.com/infj-personality"
          target="_blank"
          rel="noopener">
          INFJ-A
        </Link>
        , which is said to be the rarest personality type in the
        world. Although I'm not 100% convinced about the validity of
        the MBTI test, I find the traits of this type do apply to me,
        especially after I found out Jon Snow is of the same type as
        me.
      </Text>
      <Text as="p" variant="emphasis">
        Being born and living in an authoritarian state, I care deeply
        about human rights and social justice. The progressive ideas
        were often ridiculed as being radical and unrealistic, but the
        tide is turning globally. I'm proud to be part of the
        resistance.
      </Text>
      <Text as="p" variant="emphasis">
        I identify myself as a global citizen. Even though the idea is
        under attack from many fronts around the world, I believe
        there's still hope as the young generation is awakening. The
        liberal cosmopolitanism ideal advocated by Immanuel Kant is
        always worth fighting for if we dream of an open, just, and
        humane future.
      </Text>
      <Box
        sx={{
          height: '.1rem',
          width: '100%',
          my: 4,
          background: (t) =>
            `linear-gradient(to right, ${t.colors.highlight}, ${t.colors.secondary})`,
        }}
      />
      <Heading as="h2">Tech skills</Heading>
      <Grid
        columns={['1fr 1fr', '1fr 1fr 1fr', '1fr 1fr 1fr 1fr']}
        sx={{ justifyItems: 'center', mt: 4 }}>
        {techSkills.map((item) => (
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
          background: (t) =>
            `linear-gradient(to right, ${t.colors.highlight}, ${t.colors.secondary})`,
        }}
      />
      <Heading as="h2">Tools proficiency</Heading>
      <Box ref={barChartRef} mt={4}>
        {toolsProficiency.map((item) => (
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
    selfie: file(absolutePath: { regex: "/selfie-1/" }) {
      publicURL
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    cats: file(absolutePath: { regex: "/cats/" }) {
      publicURL
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
export default About;
