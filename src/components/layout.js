/** @jsx jsx */
import { jsx, Container, Box, Alert, Close } from 'theme-ui';
import { MDXProvider } from '@mdx-js/react';
import { useState, useEffect, useLayoutEffect } from 'react';
import wretch from 'wretch';
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
  const [userFromChina, setUserFromChina] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    wretch('/api/check-country/')
      .signal(controller)
      .get()
      .json(res => {
        const { country } = res;
        if (country === 'CN') {
          setUserFromChina(true);
        }
      })
      .catch(() => {});
    return () => controller.abort();
  }, []);

  useLayoutEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      const body = document.body;
      const st = 'scrollTop';
      const sh = 'scrollHeight';

      setScrollPercentage(
        ((h[st] || body[st]) /
          ((h[sh] || body[sh]) - h.clientHeight)) *
          100
      );
    }
    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <Box>
      <SEO
        description={description}
        title={title}
        image={image}
        pathname={pathname}
        article={article}
      />
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          width: '100%',
          height: '.3rem',
          background: t =>
            `linear-gradient(to right, ${t.colors.text}, ${t.colors.secondary} ${scrollPercentage}%, transparent 0)`,
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
        }}
      />
      <Header />

      <Container px={3}>
        {userFromChina ? (
          <Alert mb={[4, 5]} sx={{ fontSize: [4, 5] }}>
            您来自中国，请翻墙访问本站!
            <Close
              ml="auto"
              sx={{ cursor: 'pointer' }}
              mr={-2}
              onClick={() => setUserFromChina(false)}
            />
          </Alert>
        ) : null}
        <MDXProvider>{children}</MDXProvider>
        <Footer />
      </Container>
    </Box>
  );
}
