import React from 'react';
import { P5Canvas, SEO } from 'src/components';
import sketch from 'src/sketches/works/1';
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
  <>
    <SEO title='Work1' pathname='/only-works/1' />
    <StyledWork />
  </>
);
