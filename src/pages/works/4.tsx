import React from 'react';

import styled from '@emotion/styled';

import { SEO, StyledP5Canvas as P5Canvas } from '../../components';
import sketch from '../../sketches/works/4';
import baseStyle from '../../styles/base-style';

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
    <SEO title='Work4' pathname='/works/4' />
    <StyledWork />
  </>
);
