/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import { keyframes } from '@emotion/core';

const loading = keyframes`
  0% {
    left: 0;
  }
  50% {
    left: calc(100% - 6rem);
  }
  0% {
    left: 0;
  }
`;

export const Loader = () => (
  <Box
    sx={{
      width: '16rem',
      textAlign: 'center',
      position: 'relative',
      backgroundColor: 'transparent',
      textTransform: 'uppercase',
      letterSpacing: '.5rem',
      padding: '.8rem',
      fontWeight: 'bold',
      '&:before': {
        position: 'absolute',
        content: '""',
        top: 0,
        left: 0,
        height: '100%',
        width: '6rem',
        backgroundColor: 'primary',
        animation: `${loading.toString()} 2s linear infinite`,
      },
    }}>
    <Text
      sx={{
        fontSize: 4,
        color: 'highlight',
        mixBlendMode: 'difference',
      }}>
      Loading...
    </Text>
  </Box>
);
