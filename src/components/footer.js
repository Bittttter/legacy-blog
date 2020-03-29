/** @jsx jsx */
import { jsx, Text, Flex } from 'theme-ui';
import { Link as GatsbyLink } from 'gatsby';
import { FaHome } from 'react-icons/fa';
import { Location } from '@reach/router';
import Logo from './logo';

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
        <Logo
          sx={{
            width: [200, 300],
            mb: 4,
            path: {
              fill: 'primary',
            },
          }}
        />
        {/* <Location>
      {({ location }) => {
        return <p>The location is {location.pathname}</p>;
      }}
    </Location> */}
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
          Design and {'</>'} with ☕ by Lei Huang <br /> © 2018 -{' '}
          {new Date().getFullYear()}
        </Text>
      </Flex>
    )}
  </Location>
);

export default Footer;
