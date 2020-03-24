export function capitalize(str) {
  const head = str[0];
  const tail = str.slice(1);
  return `${head.toUpperCase()}${tail}`;
}

function hashCode(s) {
  let h;
  for (let i = 0; i < s.length; i++)
    h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;

  return h;
}

const tagColors = [
  {
    backgroundColor: '#ffd4a0',
    color: '#a53725',
  },
  {
    backgroundColor: '#fde876',
    color: '#735f00',
  },
  {
    backgroundColor: '#c0e6ff',
    color: '#325c80',
  },
  {
    backgroundColor: '#eed2ff',
    color: '#734098',
  },
  {
    backgroundColor: '#a7fae6',
    color: '#006d5d',
  },
  {
    backgroundColor: '#ffd6e8',
    color: '#9f1853',
  },
];

export function getColorByTag(tag) {
  const hash = Math.abs(hashCode(tag));
  return tagColors[hash % tagColors.length];
}
