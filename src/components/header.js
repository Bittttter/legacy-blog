/** @jsx jsx */
import { jsx, Text, Flex, Grid, NavLink } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link } from 'gatsby';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Switch from './theme-switch';
import Logo from './logo';

const bg = keyframes`
    to {
        background-size: 100% 100%;
    }
`;

const show = keyframes`
    to {
      opacity: 1;
    }
`;

const Header = () => {
  return (
    <Grid
      columns={[1, 1, 2]}
      sx={{
        justifyItems: 'center',
        mb: 5,
      }}>
      <Flex
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          pt: [2, 3],
        }}>
        <Link to="/">
          {/* <Text
            variant="logo"
            sx={{
              background: props =>
                `linear-gradient(150deg, ${props.colors.primary}, ${props.colors.secondary}, ${props.colors.highlight})`,
              color: 'transparent',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              opacity: 0,
              animation: `${show.toString()} 1.4s ease .6s forwards`,
            }}>
            leihuang.dev
          </Text> */}
          <Logo
            sx={{
              width: [250, 380],
              path: {
                fill: 'primary',
              },
            }}
          />
        </Link>
      </Flex>
      <Flex
        sx={{
          'a:not(:first-of-type)': { ml: 4 },
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '40rem',
          mt: 3,
        }}>
        <Link
          to="/about"
          activeClassName="active"
          sx={{
            variant: 'styles.navlink',
          }}>
          About
        </Link>
        <Link
          to="/readings"
          activeClassName="active"
          sx={{
            variant: 'styles.navlink',
          }}>
          Readings
        </Link>
        <NavLink
          href="https://lambda.cafe"
          target="_blank"
          rel="noopener"
          sx={{
            verticalAlign: 'top',
            variant: 'styles.navlink',
          }}>
          Notes{'  '}
          <FaExternalLinkAlt />
        </NavLink>
        <Switch ml={4} />
      </Flex>
    </Grid>
  );
};

export default Header;
