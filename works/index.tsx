import { Link } from 'gatsby';
import React from 'react';
import { P5Canvas, SEO } from 'src/components';
import { Layout } from 'src/layouts';
import sketch from 'src/sources/works/index';
import { baseStyle, standardCanvasStyle } from 'src/styles';

import styled from '@emotion/styled';

const info = ['test', 'test2', 'test3'];

const Works: React.FCX = ({ className }) => {
  return (
    <main className={className}>
      <ul>
        {info.map((title, i) => (
          <li key={i}>
            <iframe src={`/works/${i + 1}`} />
            <div
              onClick={() => {
                console.log('test');
              }}
            >
              <Link to={`/works/${i + 1}`} />
            </div>
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
