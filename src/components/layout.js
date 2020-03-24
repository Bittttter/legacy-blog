/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';
import { MDXProvider } from '@mdx-js/react';
import SEO from './SEO';
import Header from './header';
import Footer from './footer';
import { SEOInfoProvider } from '../hooks/use-seo';

export default function Layout({ children }) {
  return (
    <Fragment>
      <SEOInfoProvider>
        <SEO />
        <Header />
        <MDXProvider>{children}</MDXProvider>
        <Footer />
      </SEOInfoProvider>
    </Fragment>
  );
}
