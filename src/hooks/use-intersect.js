import { useEffect, useRef, useState } from 'react';

export default ({ root = null, rootMargin, threshold = 0 } = {}) => {
  const [entry, updateEntry] = useState({});
  const [node, setNode] = useState(null);

  const observer = useRef(
    typeof window !== `undefined`
      ? new window.IntersectionObserver(([ent]) => updateEntry(ent), {
          root,
          rootMargin,
          threshold,
        })
      : null
  );

  useEffect(() => {
    const { current: currentObserver } = observer;
    currentObserver.disconnect();

    if (node) currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node]);

  return [setNode, entry];
};
