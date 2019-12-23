import { Link } from 'gatsby';
import React from 'react';

import styled from '@emotion/styled';

import { SEO, StyledP5Canvas as P5Canvas } from '../../components';
import sketch from '../../sketches/works/2';
import baseStyle from '../../styles/base-style';

const Index: React.FCX = ({ className }) => (
  <main className={className}>
    <P5Canvas sketch={sketch} />
  </main>
);

const StyledIndex = styled(Index)`
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
    <SEO title='Work2' pathname='/works/2' />
    <StyledIndex />
  </>
);
