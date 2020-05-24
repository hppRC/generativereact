import React from 'react';
import { P5Canvas, SEO } from 'src/components';
import sketch from 'src/resources/works/2';
import { baseStyle, standardCanvasStyle } from 'src/styles';

import styled from '@emotion/styled';

const Work: React.FCX = ({ className }) => (
  <main className={className}>
    <P5Canvas sketch={sketch} />
  </main>
);

const StyledWork = styled(Work)`
  ${baseStyle}
  ${standardCanvasStyle}
`;

export default ({ path }: any): JSX.Element => (
  <>
    <SEO title='Work2' pathname={path} />
    <StyledWork />
  </>
);
