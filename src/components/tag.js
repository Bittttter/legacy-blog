/** @jsx jsx */
import { Link as GatsbyLink } from 'gatsby';
import { jsx, Text, Link } from 'theme-ui';
import { getColorByTag } from '../utils';

export const Tag = ({ children, url, ...props }) => {
  const { backgroundColor, color } = getColorByTag(children);
  return (
    <Link
      as={GatsbyLink}
      to={url}
      variant="tag"
      backgroundColor={backgroundColor}
      color={color}>
      <Text as="span" {...props}>
        {children}
      </Text>
    </Link>
  );
};
