/** @jsx jsx */
import { jsx, Text, Heading, Link } from 'theme-ui';
import { Link as GatsbyLink } from 'gatsby';
import styled from '@emotion/styled';
import { Layout } from '@components/';

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  margin: 24px 0;
`;

const Frame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

const PageNotFound = () => (
  <Layout title="Page Not Found">
    <Heading as="h1" my={4}>
      Page Not Found!
    </Heading>
    <Text as="p" variant="body">
      I have not written this article yet, would you like to write it
      for me?
    </Text>
    <Wrapper>
      <Frame
        title="Outside with the cuties"
        allowFullScreen
        width="1425"
        height="559"
        src="https://www.youtube.com/embed/6IJB0aD8gSA"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></Frame>
    </Wrapper>
    <Link sx={{ fontSize: 4 }} as={GatsbyLink} to="/">
      Go back to home
    </Link>
  </Layout>
);

export default PageNotFound;
