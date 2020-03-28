/** @jsx jsx */
import { jsx, Text } from 'theme-ui';
import { from, interval, concat, of } from 'rxjs';
import {
  map,
  take,
  repeat,
  delay,
  concatMap,
  ignoreElements,
} from 'rxjs/operators';
import { useObservable } from 'rxjs-hooks';
import { keyframes } from '@emotion/core';

const blink = colors => keyframes`
     0% {
         background-color: ${colors.text};  
    }
    49% {
        background-color: ${colors.text}; 
    }
    60% {    
       background-color: transparent; 
    }
    99% {    
        background-color:transparent;  
    }
    100% {
       background-color: ${colors.text};    
    }
`;

const typeWord = ({ word, speed, backwards = false }) =>
  interval(speed).pipe(
    map(x =>
      backwards
        ? word.substr(0, word.length - x - 1)
        : word.substr(0, x + 1)
    ),
    take(word.length)
  );

export const TypeWriter = ({ words, ...props }) => {
  const value = useObservable(() =>
    from(words).pipe(
      concatMap(word =>
        concat(
          typeWord({ word, speed: 70 }), // type forwards
          of('').pipe(delay(1500), ignoreElements()), // pause
          typeWord({ word, speed: 30, backwards: true }), // type backwards
          of('').pipe(delay(300), ignoreElements()) // pause
        )
      ),
      repeat()
    )
  );
  return (
    <Text
      {...props}
      sx={{
        position: 'relative',
        '&:after': {
          position: 'absolute',
          content: '""',
          width: '.2rem',
          height: '80%',
          top: 0,
          right: '-1rem',
          animation: ({ colors }) =>
            `${blink(colors).toString()} .8s linear infinite`,
        },
      }}>
      {value}
    </Text>
  );
};
