/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';

export function Callout({ children }) {
  return (
    <Box
      sx={{
        padding: 3,
        position: 'relative',
        with: '100%',
        my: 4,
        background: ({ colors }) => colors.background,
        '&:after': {
          position: 'absolute',
          content: '""',
          top: '0px',
          left: '-2px',
          bottom: '0px',
          right: '-2px',
          background: ({ colors }) =>
            `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
          transform: 'skew(-3deg, -1deg)',
          zIndex: -1,
        },
      }}>
      <Text variant="callout">{children}</Text>
    </Box>
  );
}
