import { Link } from 'gatsby';
import React from 'react';
import { SEO } from 'src/components';
import baseStyle from 'src/styles/base-style';

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
    </main>
  );
};

const StyledWorks = styled(Works)`
  ${baseStyle};
  padding-top: 10vh;
`;

export default () => (
  <>
    <SEO title='Works' pathname='/works' />
    <StyledWorks />
  </>
);
