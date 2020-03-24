export const plColors = {
  java: '#b07219',
  javascript: '#f1e05a',
  js: '#f1e05a',
  elm: '#60B5CC',
  css: '#563d7c',
  'emacs lisp': '#c065db',
  'common lisp': '#3fb68b',
  erlang: '#B83998',
  'f#': '#b845fc',
  fsharp: '#b845fc',
  go: '#00ADD8',
  elixir: '#6e4a7e',
  jsx: '#f1e05a',
  julia: '#a270ba',
  kotlin: '#F18E33',
  swift: '#ffac45',
  'standard ml': '#dc566d',
  sml: '#dc566d',
  clojure: '#db5855',
  purescript: '#1D222D',
  python: '#3572A5',
  shell: '#89e051',
  racket: '#3c5caa',
  typescript: '#2b7489',
  ts: '#2b7489',
  vue: '#42b883',
  'vim script': '#199f4b',
  webassembly: '#04133b',
  rust: '#dea584',
  haskell: '#5e5086',
};

export function getContrastYIQ(hexcolor) {
  hexcolor = hexcolor.replace('#', '');
  const r = parseInt(hexcolor.substr(0, 2), 16);
  const g = parseInt(hexcolor.substr(2, 2), 16);
  const b = parseInt(hexcolor.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? 'black' : 'white';
}
