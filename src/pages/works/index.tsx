import { Link } from 'gatsby';
import React from 'react';
import { P5Canvas, SEO } from 'src/components';
import sketch from 'src/sketches/works/index';
import { baseStyle, standardCanvasStyle } from 'src/styles';

import styled from '@emotion/styled';

const info = ['test', 'test2', 'test3'];

const Works: React.FCX = ({ className }) => {
  return (
    <main className={className}>
      <ul>
        {info.map((title, i) => (
          <li key={i}>
            <Link to={`/works/${i + 1}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <P5Canvas sketch={sketch} />
    </main>
  );
};

const StyledWorks = styled(Works)`
  ${baseStyle};
  ${standardCanvasStyle};
  padding-top: 10vh;
`;

export default () => (
  <>
    <SEO title='Works' pathname='/works' />
    <StyledWorks />
  </>
);
