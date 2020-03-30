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

const blink = color => keyframes`
     0% {
         background-color: ${color};  
    }
    49% {
        background-color: ${color}; 
    }
    60% {    
       background-color: transparent; 
    }
    99% {    
        background-color:transparent;  
    }
    100% {
       background-color: ${color};    
    }
`;

const type = ({ word, speed, backward = false }) =>
  interval(speed).pipe(
    map(x =>
      backward
        ? word.substr(0, word.length - x - 1)
        : word.substr(0, x + 1)
    ),
    take(word.length)
  );

const typeEffect = word =>
  concat(
    type({ word, speed: 70 }), // type forwards
    of('').pipe(delay(1500), ignoreElements()), // pause
    type({ word, speed: 30, backward: true }), // delete
    of('').pipe(delay(300), ignoreElements()) // pause
  );

export const TypeWriter = ({ words, ...props }) => {
  const value = useObservable(() =>
    from(words).pipe(concatMap(typeEffect), repeat())
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
            `${blink(colors.text).toString()} .8s linear infinite`,
        },
      }}>
      {value}
    </Text>
  );
};
