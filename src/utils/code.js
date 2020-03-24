import { capitalize } from './tags';

export function formatLanguageName(name) {
  if (name === 'js' || name === 'javascript') {
    return 'JavaScript';
  }

  if (name === 'jsx') {
    return 'JSX';
  }

  return capitalize(name);
}
