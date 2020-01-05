import React from 'react';
import { P5Canvas, SEO } from 'src/components';
import { Layout } from 'src/layouts';
import sketch from 'src/sources/works/2';
import { baseStyle } from 'src/styles';

import styled from '@emotion/styled';

const Work: React.FCX = ({ className }) => (
  <main className={className}>
    <P5Canvas sketch={sketch} />
  </main>
);

const StyledWork = styled(Work)`
  ${baseStyle};
  canvas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

export default () => (
  <Layout>
    <SEO title='Work2' pathname='/works/2' />
    <StyledWork />
  </Layout>
);
