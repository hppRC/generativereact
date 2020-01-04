import { Link } from 'gatsby';
import React from 'react';
import { P5Canvas, SEO } from 'src/components';
import sketch from 'src/sketches/index';
import { baseStyle, standardCanvasStyle } from 'src/styles';

import styled from '@emotion/styled';

const Index: React.FCX = ({ className }) => (
  <>
    <main className={className}>
      <section>
        <Link to='/works'>
          <h1>Genarative React</h1>
        </Link>
      </section>
      <P5Canvas sketch={sketch} />
    </main>
  </>
);

const StyledIndex = styled(Index)`
  ${baseStyle};
  ${standardCanvasStyle};

  section {
    position: absolute;
    bottom: 10vh;
    right: 10vw;
    a {
      color: #fff;
      text-decoration: none;
    }
    h1 {
      font-size: 10rem;
    }
  }
`;

export default () => (
  <>
    <SEO title='Top' pathname='/' />
    <StyledIndex />
  </>
);
