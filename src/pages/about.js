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
          Just a serious coder at work.
        </Text>
      </Box>
      <Text as="p" variant="emphasis">
        I'm Lei Huang, a frontend engineer from China. I taught myself
        programming and made it my career a few years ago. I have two
        years of fulltime working experience as a front-end developer,
        including one year at Alipay. Before that, I was a content
        marketing specialist at a sales company.
      </Text>
      <Text as="p" variant="emphasis">
        My main focus is user experience and web performance. For now,
        I mostly work with JavaScript and React to build web apps. But
        I also dabble in web design. I focus on design systems and
        JAMstack at the moment.
      </Text>
      <Text as="p" variant="emphasis">
        Apart from writing JavaScript for work, I also love to write
        Haskell for recreational purposes. Writing denotative code
        gives me a sense of elevation. It's an experience I don't get
        from writing imperative JavaScript code. Sometimes I choose to
        be impractical to appreciate the beauty of the universe.
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
        about human rights and social justice. Holding and often
        expressing political opinions has made me a minority in most
        groups. I certainly don't fit in the Chinese nationalists. But
        even among the Chinese dissident rebels, I still can't fit in,
        as the majority of them are right-wing wishful-thinking
        conspiracy-theory-chasing Republicans (Yes, it sounds absurd,
        but it's a real thing in China{' '}
        <span role="img" aria-label="face palm emoji">
          🤦🏻‍♂️
        </span>
        ).
      </Text>
      <Text as="p" variant="emphasis">
        I identify myself as a global citizen. Even though the idea is
        under attack from all directions around the world, I believe
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
    avatar: file(absolutePath: { regex: "/profile-at-work/" }) {
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
