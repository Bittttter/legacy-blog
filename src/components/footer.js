/** @jsx jsx */
import { jsx, Text, Flex } from 'theme-ui';
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
