import React from 'react';
import { SEO, StyledP5Canvas as P5Canvas } from 'src/components';
import sketch from 'src/sketches/works/3';
import baseStyle from 'src/styles/base-style';

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
    <SEO title='Work3' pathname='/works/3' />
    <StyledWork />
  </>
);
