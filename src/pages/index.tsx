import { Link } from 'gatsby';
import React from 'react';

import styled from '@emotion/styled';

import { SEO, StyledP5Canvas as P5Canvas } from '../components';
import sketch from '../sketches/index';
import baseStyle from '../styles/base-style';

const Index: React.FCX = ({ className }) => (
  <>
    <main className={className}>
      <Link to='/works'>
        <div>
          <h1>Genarative{'\n'}React</h1>
          <p>click here</p>
        </div>
      </Link>
      <P5Canvas sketch={sketch} />
    </main>
  </>
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
    <SEO title='Top' pathname='/' />
    <StyledIndex />
  </>
);
