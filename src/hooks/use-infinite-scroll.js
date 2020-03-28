import { useEffect, useRef, useState } from 'react';
import useWindowSize from './use-window-size';
import useInterval from './use-interval';

function useInfiniteScroll({
  loading,
  hasNextPage,
  onLoadMore,
  threshold = 150,
  checkInterval = 200,
}) {
  const ref = useRef(null);
  const { height: windowHeight } = useWindowSize();
  const [listen, setListen] = useState(true);

  useEffect(() => {
    if (!loading) {
      setListen(true);
    }
  }, [loading]);

  function getBottomOffset() {
    const rect = ref.current.getBoundingClientRect();
    const bottomOffset = rect.bottom - windowHeight;

    return bottomOffset;
  }

  function listenBottomOffset() {
    if (listen && !loading && hasNextPage) {
      if (ref.current) {
        const bottomOffset = getBottomOffset();
        const validOffset = bottomOffset < threshold;

        if (validOffset) {
          setListen(false);
          onLoadMore();
        }
      }
    }
  }

  useInterval(
    () => {
      listenBottomOffset();
    },
    hasNextPage ? checkInterval : 0
  );

  return ref;
}

export default useInfiniteScroll;
