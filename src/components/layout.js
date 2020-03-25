/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import { MDXProvider } from '@mdx-js/react';
import SEO from './SEO';
import Header from './header';
import Footer from './footer';

export function Layout({
  children,
  description,
  title,
  image,
  pathname,
  article,
}) {
  return (
    <Box>
      <SEO
        description={description}
        title={title}
        image={image}
        pathname={pathname}
        article={article}
      />
      <Header />
      <Container px={3}>
        <MDXProvider>{children}</MDXProvider>
        <Footer />
      </Container>
    </Box>
  );
}
