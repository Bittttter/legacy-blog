import React, { useEffect } from 'react';
import useIntersect from '../hooks/use-intersect';
import { useCurrentInViewport } from '../hooks/use-current-in-viewport';

const Section = ({ children, ...props }) => {
  const [, dispatch] = useCurrentInViewport();
  const [ref, ent] = useIntersect();
  useEffect(() => {
    if (ent.isIntersecting && ent.intersectionRatio > 0) {
      dispatch(ent.target.getAttribute('id'));
    }
  });

  return (
    <section ref={ref} {...props}>
      {children}
    </section>
  );
};

export default Section;
