import { Link } from 'gatsby';
import React from 'react';
import { SEO, StyledP5Canvas as P5Canvas } from 'src/components';
import sketch from 'src/sketches/index';
import { baseStyle } from 'src/styles';

import styled from '@emotion/styled';

const Index: React.FCX = ({ className }) => (
  <>
    <main className={className}>
      <section>
        <Link to='/works'>
          <h1>Genarative React</h1>
          <p>click here</p>
        </Link>
      </section>
      <P5Canvas sketch={sketch} />
    </main>
  </>
);

const StyledIndex = styled(Index)`
  ${baseStyle};

  section {
    a {
      color: #fff;
      text-decoration: none;
    }
    h1 {
      font-size: 5rem;
    }
  }

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
