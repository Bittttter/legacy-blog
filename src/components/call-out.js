/** @jsx jsx */
import { jsx, Box, Styled } from 'theme-ui';

export function CallOut({ children, title }) {
  return (
    <Box sx={{ backgroundColor: 'highlightBg', p: 3 }}>
      <Styled.h3>{title}</Styled.h3>
      <Styled.p>{children}</Styled.p>
    </Box>
  );
}
