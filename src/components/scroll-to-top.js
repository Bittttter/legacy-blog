/** @jsx jsx */
import { jsx, Button } from 'theme-ui';
import { FaArrowUp } from 'react-icons/fa';

export const ScrollToTop = () => (
  <Button
    sx={{
      fontSize: 3,
      width: '3rem',
      height: '3rem',
      cursor: 'pointer',
      p: '.4rem',
      pt: '.6rem',
    }}
    onClick={() => {
      window.scrollTo(0, 0);
    }}>
    <FaArrowUp />
  </Button>
);
