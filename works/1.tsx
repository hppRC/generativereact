import React from 'react';
import { P5Canvas, SEO } from 'src/components';
import sketch from 'src/sources/works/1';
import { baseStyle } from 'src/styles';

import styled from '@emotion/styled';

const Work: React.FCX = ({ className }) => (
  <main className={className} id='main'>
    <P5Canvas sketch={sketch} props={{}} />
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
    <SEO title='Work1' pathname='/works/1' />
    <StyledWork />
  </>
);
