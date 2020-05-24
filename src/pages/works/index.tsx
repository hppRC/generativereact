import { Link } from 'gatsby';
import React from 'react';
import { P5Canvas, SEO } from 'src/components';
import sketch from 'src/resources/works/index';
import { baseStyle, standardCanvasStyle } from 'src/styles';

import styled from '@emotion/styled';

const workNum = 6;

const Works: React.FCX = ({ className }) => (
  <main className={className}>
    <ul>
      {[...Array(workNum)].map((_, i) => (
        <li key={`work${i + 1}`}>
          <Link to={`/works/${i + 1}`}>
            <span>{`${i + 1}`}</span>
          </Link>
        </li>
      ))}
    </ul>
    <P5Canvas sketch={sketch} />
  </main>
);

const StyledWorks = styled(Works)`
  ${baseStyle}
  ${standardCanvasStyle}

  ul {
    list-style: none;
    li {
      width: 30%;
      margin: 2rem;
      border: 1px solid #fff;
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

export default ({ path }: any): JSX.Element => (
  <>
    <SEO title='Works' pathname={path} />
    <StyledWorks />
  </>
);
