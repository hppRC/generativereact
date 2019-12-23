import { Link } from 'gatsby';
import React from 'react';

import styled from '@emotion/styled';

import { SEO } from '../components';
import baseStyle from '../styles/base-style';

const Index: React.FCX = ({ className }) => {
  return (
    <main className={className}>
      <Link to='/works'>
        <div>
          <h1>Genarative{'\n'}React</h1>
          <p>click here</p>
        </div>
      </Link>
    </main>
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
