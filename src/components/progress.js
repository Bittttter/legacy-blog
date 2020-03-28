/** @jsx jsx */
import { jsx, Box, Flex, Text } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { useEffect, useState } from 'react';
import useIntersect from '../hooks/use-intersect';
import { tween, ease } from '../utils';

const progress = (total, percent) => {
  const to = total - (total * percent) / 100;
  return keyframes`
        to {
            stroke-dashoffset: ${to};
        }
    `;
};

const lineProgress = keyframes`
  to {
    transform: scaleX(1)
  }
`;

const title = keyframes`
  0% {
    transform: translateX(-100%);
      opacity: 0;
  }
  25% {
    transform: translateX(-75%);
      opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const circleStyle = {
  width: '100%',
  height: '100%',
  fill: 'none',
  stroke: '#eee',
  strokeWidth: 10,
  strokeLinecap: 'round',
  transform: 'translate(.5rem, .5rem)',
};

export const Circle = ({
  strokeColor,
  percentage,
  skill,
  ...props
}) => {
  const [ref, cardEntry] = useIntersect({ threshold: 0.55 });
  const [animate, setAnimate] = useState(false);
  const [tweenedPercent, setPercent] = useState(0);

  useEffect(() => {
    if (cardEntry.intersectionRatio > 0 && !animate) {
      setAnimate(true);
      tween({
        from: 0,
        to: percentage,
        duration: 1500,
        easing: ease(3),
        onUpdate: val => setPercent(val),
      });
    }
  }, [cardEntry, percentage, animate]);
  return (
    <Flex
      {...props}
      ref={ref}
      sx={{
        position: 'relative',
        width: '16rem',
        height: '22rem',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        transition: '.5s',
      }}>
      <Box
        sx={{
          position: 'relative',
          width: '13rem',
          height: '13rem',
          borderRadius: '50%',
          backgroundColor: 'transparent',
          zIndex: 1000,
        }}>
        <svg
          sx={{
            position: 'relative',
            width: '13rem',
            height: '13rem',
            zIndex: 1000,
          }}>
          <circle sx={circleStyle} cx="60" cy="60" r="60"></circle>
          <circle
            sx={{
              ...circleStyle,
              stroke: strokeColor,
              strokeDasharray: 377,
              strokeDashoffset: 377,
              ...(animate && {
                animation: `${progress(
                  377,
                  percentage
                ).toString()} 1.5s cubic-bezier(.09,.57,.59,1.25) forwards`,
              }),
            }}
            cx="60"
            cy="60"
            r="60"></circle>
        </svg>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
          }}>
          <Text
            as="span"
            sx={{
              color: strokeColor,
              fontSize: 6,
              fontWeight: 'heading',
              transition: '.5s',
            }}>
            {tweenedPercent.toFixed(0)}
            <span>%</span>
          </Text>
        </Box>
      </Box>
      <Text
        as="span"
        sx={{
          mt: 3,
          fontSize: 6,
          fontWeight: 'heading',
        }}>
        {skill}
      </Text>
    </Flex>
  );
};

export const Line = ({ skill, percentage, animate, ...props }) => {
  const [tweenedPercent, setPercent] = useState(0);
  useEffect(() => {
    if (animate) {
      tween({
        from: 0,
        to: percentage,
        duration: 1500,
        easing: ease(3),
        onUpdate: val => setPercent(val),
      });
    }
  }, [animate, percentage]);
  return (
    <Box {...props}>
      <Box
        sx={{
          position: 'relative',
          height: '4rem',
          overflow: 'hidden',
        }}>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          }}>
          <Text sx={{ fontSize: 4, fontWeight: 'heading' }}>
            {skill}
          </Text>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            // top: '6px',
            left: 0,
            textAlign: 'right',
            width: `${percentage}%`,
            transform: 'translateX(-100%)',
            opacity: 0,
            ...(animate && {
              animation: `${title.toString()} 1.4s ease forwards`,
            }),
          }}>
          <Text
            sx={{
              fontSize: 4,
              fontWeight: 'heading',
              marginRight: '-1.8rem',
            }}>
            {tweenedPercent.toFixed(0)}%
          </Text>
        </Box>
      </Box>
      <Box
        sx={{
          height: '1rem',
          borderRadius: '1rem',
          backgroundColor: '#eee',
          transform: 'scaleX(0)',
          transformOrigin: 'top left',
          ...(animate && {
            animation: `${lineProgress.toString()} 1.4s ease-in-out forwards`,
          }),
        }}>
        <Box
          sx={{
            height: '100%',
            borderRadius: '1rem',
            width: `${percentage}%`,
            transform: 'scaleX(0)',
            transformOrigin: 'top left',
            background: t =>
              `linear-gradient(90deg, ${t.colors.text}, ${t.colors.secondary})`,
            ...(animate && {
              animation: `${lineProgress.toString()} 1.4s cubic-bezier(.09,.57,.59,1.21) forwards`,
            }),
          }}></Box>
      </Box>
    </Box>
  );
};
