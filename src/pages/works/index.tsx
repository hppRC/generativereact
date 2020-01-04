import { Link } from 'gatsby';
import React from 'react';
import { P5Canvas, SEO } from 'src/components';
import { Layout } from 'src/layouts';
import sketch from 'src/sketches/works/index';
import { baseStyle, standardCanvasStyle } from 'src/styles';

import styled from '@emotion/styled';

const workNum = 4;

const Works: React.FCX = ({ className }) => {
  return (
    <main className={className}>
      <ul>
        {[...Array(workNum)].map((_, i) => (
          <li key={i}>
            <iframe src={`/only-works/${i + 1}`} />
            <div>
              <Link to={`/works/${i + 1}`} />
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

const StyledWorks = styled(Works)`
  ${baseStyle};

  ul {
    list-style: none;
    li {
      position: relative;
      display: block;
      width: 30rem;
      iframe {
        z-index: -1;
        border: none;
        width: 30rem;
      }

      div {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        a {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

export default () => (
  <Layout>
    <SEO title='Works' pathname='/works' />
    <StyledWorks />
  </Layout>
);
