import get from 'lodash/get';
import sortBy from 'lodash/sortBy';

export function mentions({ allWebMentionEntry }) {
  const webMentionComments = get(allWebMentionEntry, 'nodes', [])
    .filter((w) => w.wmProperty === 'in-reply-to')
    .map((node) => ({
      id: node.id,
      author: node.author,
      url: node.url,
      date: node.published,
      message: get(node, 'content.text'),
    }));

  const comments = sortBy(webMentionComments, 'date');
  comments.totalCount = webMentionComments.length;

  const likes = get(allWebMentionEntry, 'nodes', [])
    .filter((w) => w.wmProperty === 'like-of')
    .map((w) => w.author);

  const reposts = get(allWebMentionEntry, 'nodes', [])
    .filter((w) => w.wmProperty === 'repost-of')
    .map((w) => w.author);

  return {
    comments,
    likes,
    reposts,
  };
}
