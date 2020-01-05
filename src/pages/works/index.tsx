import { Link } from 'gatsby';
import React from 'react';
import { P5Canvas, SEO } from 'src/components';
import { Layout } from 'src/layouts';
import sketch from 'src/resources/works/index';
import { baseStyle, standardCanvasStyle } from 'src/styles';

import styled from '@emotion/styled';

const workNum = 4;

const Works: React.FCX = ({ className }) => {
  return (
    <main className={className}>
      <ul>
        {[...Array(workNum)].map((_, i) => (
          <li key={i}>
            <Link to={`/works/${i + 1}`}>
              <span>{`${i + 1}`}</span>
            </Link>
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

  ul {
    list-style: none;
    li {
      border: 1px solid #fff;
      width: 30%;
      margin: 2rem;
      transition: background-color 0.15s;

      a {
        display: block;
        width: 100%;
        height: 100%;
        padding: 2rem;
        span {
          display: none;
        }
      }

      :hover {
        background-color: #fff;

        a {
          color: #09090f;
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
