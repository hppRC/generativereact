import React from 'react';
import { SEO } from 'src/components';
import { Layout } from 'src/layouts';
import { baseStyle } from 'src/styles';

import styled from '@emotion/styled';

const NotFound: React.FCX = ({ className }) => (
  <main className={className}>
    <h1>Not Found</h1>
  </main>
);

const StyledNotFound = styled(NotFound)`
  ${baseStyle};
`;

export default () => (
  <Layout>
    <SEO title='404 NotFound' />
    <StyledNotFound />
  </Layout>
);
