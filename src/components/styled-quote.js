/** @jsx jsx */
import { jsx, Text } from 'theme-ui';

export function StyledQuote(props) {
  return (
    <blockquote
      sx={{
        border: 0,
        margin: 0,
        ml: 4,
        mt: 3,
        pl: 2,
        color: 'text',
        fontSize: [5, 6],
        fontFamily: 'heading',
        fontStyle: 'italic',
        lineHeight: 1.4,
        position: 'relative',
        zIndex: 600,

        'p:first-child:before': {
          position: 'absolute',
          content: 'open-quote',
          top: '-.4em',
          left: '-.45em',
          fontSize: '75px',
          fontStyle: 'italic',
          fontWeight: 700,
          zIndex: -1,
          color: 'primary',
        },
      }}>
      {props.texts.map((text, i) => (
        <Text
          as="p"
          key={i}
          sx={{
            mb: 3,
          }}>
          {text}
        </Text>
      ))}
    </blockquote>
  );
}
