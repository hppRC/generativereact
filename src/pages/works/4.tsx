import React from 'react';
import { SEO } from 'src/components';
import { Layout } from 'src/layouts';
import Sketch from 'src/resources/works/4';
import { threeCanvasStyle } from 'src/styles';

import styled from '@emotion/styled';

const Work: React.FCX = ({ className }) => (
  <main className={className}>
    <Sketch />
  </main>
);

const StyledWork = styled(Work)`
  ${threeCanvasStyle};
`;

export default () => (
  <Layout>
    <SEO title='Work4' pathname='/works/4' />
    <StyledWork />
  </Layout>
);
