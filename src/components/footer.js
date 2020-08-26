/** @jsx jsx */
import { jsx, Text, Flex, Link } from 'theme-ui';
import { Link as GatsbyLink } from 'gatsby';
import { FaHome } from 'react-icons/fa';
import { Location } from '@reach/router';

const Footer = () => (
  <Location>
    {({ location }) => (
      <Flex
        sx={{
          width: '100%',
          mt: 4,
          p: 4,
          flexDirection: 'column',
          textAlign: 'center',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Text variant="small" sx={{ opacity: 0 }}>
          Follow{' '}
          <Link
            className="h-card"
            rel="me"
            href="https://levism.com/">
            Levi
          </Link>{' '}
          on{' '}
          <Link href="https://twitter.com/levibit" rel="me">
            Twitter (@levibit)
          </Link>
          ,{' '}
          <Link href="https://github.com/levibit" rel="me">
            GitHub
          </Link>
          , or send him an{' '}
          <Link
            className="u-email"
            href="mailto:levi.wong@hey.com"
            rel="me">
            email
          </Link>
        </Text>
        {location.pathname !== '/' ? (
          <GatsbyLink
            to="/"
            sx={{
              textDecoration: 'none',
              fontSize: [3, 4],
              mb: [3, 4],
              color: 'secondary',
            }}>
            <FaHome sx={{ verticalAlign: 'middle', mb: 1 }} /> Back to
            Home
          </GatsbyLink>
        ) : null}
        <Text variant="small">
          Design and {'</>'} with ☕ by Levi Wong <br /> © 2018 -{' '}
          {new Date().getFullYear()}
        </Text>
      </Flex>
    )}
  </Location>
);

export default Footer;
