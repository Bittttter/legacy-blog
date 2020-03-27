/** @jsx jsx */
import { jsx, useColorMode, Text, Box } from 'theme-ui';
import { preToCodeBlock } from 'mdx-utils';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from 'react-live';
import Highlight, { defaultProps } from 'prism-react-renderer';
import Prism from 'prismjs';
import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight';
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import {
  plColors,
  getContrastYIQ,
  formatLanguageName,
} from '../utils';
import scope from '../scope';

const getLoader = require('prismjs/dependencies');
const components = require('prismjs/components');

const componentsToLoad = [
  'go',
  'elixir',
  'python',
  'fsharp',
  'haskell',
];

const loader = getLoader(components, componentsToLoad);
loader.load(id => {
  require(`prismjs/components/prism-${id}.min.js`);
});

export const Code = props => {
  const [colorMode] = useColorMode();
  const codeProps = preToCodeBlock(props);

  const { codeString, language } = codeProps;

  return codeProps['react-live'] ? (
    <LiveProvider
      code={codeString}
      scope={scope}
      theme={colorMode === 'default' ? nightOwlLight : nightOwl}>
      <LiveEditor />
      <LiveError />
      <LivePreview
        sx={{
          border: t => `1px solid ${t.colors.muted}`,
          p: 4,
          transition: 'background 0.5s linear, color 0.5s linear',
          'div :first-child': {
            mt: 0,
          },
          variant: 'react-live',
        }}
      />
    </LiveProvider>
  ) : (
    <Highlight
      {...defaultProps}
      Prism={Prism}
      code={codeString}
      language={language}
      theme={colorMode === 'dark' ? nightOwl : nightOwlLight}>
      {({
        className,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }) => {
        const langBgColor =
          plColors[language.toLowerCase()] || '##5e5086';
        const langColor = getContrastYIQ(langBgColor);
        return (
          <pre
            className={className}
            style={style}
            sx={{
              p: 2,
              fontSize: 3,
              transition: 'background 0.5s linear, color 0.5s linear',
              fontFamily: 'monospace',
              overflowX: 'scroll',
              variant: 'prism-highlight',
            }}>
            <Box mb={2} sx={{ margin: '-0.8rem 0 0 -0.8rem' }}>
              <Text
                as="span"
                variant="small"
                sx={{
                  p: 1,
                  borderRadius: '0 0 0.8rem 0',
                  verticalAlign: 'top',
                  color: langColor,
                  backgroundColor: langBgColor,
                }}>
                {formatLanguageName(language)}
              </Text>
            </Box>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        );
      }}
    </Highlight>
  );
};
