/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Dump } from './dump';

export function Feedback({ likes, comments, reposts, twitterId }) {
  return (
    <Dump
      likes={likes}
      comments={comments}
      reposts={reposts}
      twitterId={twitterId}
    />
  );
}
