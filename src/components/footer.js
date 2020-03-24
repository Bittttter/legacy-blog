/** @jsx jsx */
import { jsx, Text, Flex, Link } from 'theme-ui';

const Footer = () => (
  <Flex
    sx={{
      width: '100%',
      px: 4,
      textAlign: 'center',
      height: '15rem',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <Text color="grey" sx={{ fontSize: [2, 3] }}>
      Design and {'</>'} with ☕ by Lei Huang <br /> © 2018 -{' '}
      {new Date().getFullYear()}, built with{' '}
      <Link
        href="https://gatsbyjs.org"
        target="_blank"
        rel="noopener">
        Gatsby
      </Link>
    </Text>
  </Flex>
);

export default Footer;
