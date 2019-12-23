import React from 'react';

import styled from '@emotion/styled';

import { SEO } from '../../components';
import baseStyle from '../../styles/base-style';

const Work1: React.FCX = ({ className }) => {
  return <main className={className}>Work1</main>;
};

const StyledWork1 = styled(Work1)`
  ${baseStyle};
`;

export default () => (
  <>
    <SEO title='Work1' pathname='/works/1' />
    <StyledWork1 />
  </>
);
