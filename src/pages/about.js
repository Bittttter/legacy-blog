/** @jsx jsx */
import { jsx, Text, Box, Heading, Grid, Link } from 'theme-ui';
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
          Reading some random philosophical papers.
        </Text>
      </Box>
      <Text as="p" variant="emphasis">
        I'm Lei Huang, a frontend engineer from China. I taught myself
        programming and made it my career a few years ago. Currently,
        I'm working remotely for a fin-tech company, previously I worked for
        Alipay. Before becoming a software engineer, I was a content
        marketing specialist at a sales company.
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
      <Heading as="h2" mb={4}>
        Certificate
      </Heading>
      <a
        href="https://www.freecodecamp.org/certification/leihuang/full-stack"
        target="_blank"
        rel="noopener noreferrer">
        <Image
          fluid={data.certificate.childImageSharp.fluid}
          alt="Full Stack certificate of Lei Huang from FreeCodeCamp"
          sx={{ width: '100%' }}
        />
      </a>
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
    avatar: file(absolutePath: { regex: "/profile-at-home/" }) {
      publicURL
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    certificate: file(absolutePath: { regex: "/fcc-certificate/" }) {
      publicURL
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
export default About;
