import { Link } from 'gatsby';
import React from 'react';

import styled from '@emotion/styled';

import { SEO } from '../../components';
import baseStyle from '../../styles/base-style';

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
