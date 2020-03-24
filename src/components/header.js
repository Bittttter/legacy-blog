/** @jsx jsx */
import { jsx, Text, Flex, Grid, NavLink } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link } from 'gatsby';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Switch from './theme-switch';

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
      }}>
      <Flex
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          pt: [2, 3],
        }}>
        <Link
          to="/"
          sx={{
            position: 'relative',
            display: 'block',
            backgroundColor: 'background',
            textDecoration: 'none',
            width: ['19rem', '28rem'],
            height: ['6rem', '10rem'],
            textAlign: 'center',
            verticalAlign: 'middle',
            py: [2, 3],
            px: 3,
            my: [3, 4],
            '&:after': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: '-5px',
              left: '-5px',
              right: '-5px',
              bottom: '-5px',
              background: props =>
                `linear-gradient(150deg, ${props.colors.primary}, ${props.colors.secondary}, ${props.colors.highlight})`,
              backgroundSize: '0% 0%',
              backgroundRepeat: 'no-repeat',
              animation: `${bg.toString()} 1.4s ease 0.3s forwards`,
              zIndex: -1,
            },
          }}>
          <Text
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
          </Text>
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
