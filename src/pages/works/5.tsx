import React from 'react';
import { SEO } from 'src/components';
import Sketch from 'src/resources/works/5';
import { threeCanvasStyle } from 'src/styles';

import styled from '@emotion/styled';

const Work: React.FCX = ({ className }) => (
  <main className={className}>
    <Sketch />
  </main>
);

const StyledWork = styled(Work)`
  ${threeCanvasStyle}
  z-index: 0 !important;
`;

export default ({ path }: any): JSX.Element => (
  <>
    <SEO title='Work5' pathname={path} />
    <StyledWork />
  </>
);
