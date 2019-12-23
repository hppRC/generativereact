import { Link } from 'gatsby';
import React, { useEffect } from 'react';

import styled from '@emotion/styled';

import { SEO, StyledP5Canvas as P5Canvas } from '../components';
import baseStyle from '../styles/base-style';

const sketch = (p: any) => {
  p.setup = () => {};
  p.draw = () => {
    p.ellipse(50, 50, 80, 80);
  };
};

const Index: React.FCX = ({ className }) => {
  return (
    <>
      <main className={className}>
        <Link to='/works'>
          <div>
            <h1>Genarative{'\n'}React</h1>
            <p>click here</p>
          </div>
        </Link>
      </main>
      <P5Canvas sketch={sketch} />
    </>
  );
};

const StyledIndex = styled(Index)`
  ${baseStyle};
`;

export default () => (
  <>
    <SEO title='Top' pathname='/' />
    <StyledIndex />
  </>
);
