/** @jsx jsx */
import { jsx, Flex, Grid, NavLink } from 'theme-ui';
// import { keyframes } from '@emotion/core';
import { Link } from 'gatsby';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Switch from './theme-switch';
import Logo from './logo';

// const bg = keyframes`
//     to {
//         background-size: 100% 100%;
//     }
// `;

// const show = keyframes`
//     to {
//       opacity: 1;
//     }
// `;

const Header = () => {
  return (
    <Grid
      columns={[1, 1, 2]}
      sx={{
        justifyItems: 'center',
        mb: 5,
        pt: 3,
      }}>
      <Flex
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          pt: [2, 3],
        }}>
        <Link to="/" aria-label="site logo">
          <Logo
            sx={{
              width: [200, 300],
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
