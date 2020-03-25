/** @jsx jsx */
import { jsx, useColorMode, Button } from 'theme-ui';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Switch(props) {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <Button
      {...props}
      sx={{
        border: 'none',
        background: 'transparent',
        position: 'relative',
        width: '2rem',
        height: '2rem',
        fontSize: '2rem',
        outline: 'none',
        cursor: 'pointer',
      }}
      onClick={e => {
        setColorMode(colorMode === 'dark' ? 'default' : 'dark');
      }}
      aria-label="switch theme">
      <FaSun
        sx={{
          color: 'text',
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: colorMode === 'dark' ? 1 : 0,
          transition: 'opacity 0.25s linear',
        }}
      />
      <FaMoon
        sx={{
          color: 'text',
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: colorMode === 'dark' ? 0 : 1,
          transition: 'opacity 0.25s linear',
        }}
      />
    </Button>
  );
}
