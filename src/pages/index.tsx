import { Link } from 'gatsby';
import React from 'react';
import { SEO } from 'src/components';
import Sketch from 'src/resources/index';
import { threeCanvasStyle } from 'src/styles';

import styled from '@emotion/styled';

const Index: React.FCX = ({ className }) => (
  <>
    <main className={className}>
      <section>
        <Link to='/works'>
          <h1>Genarative React</h1>
        </Link>
      </section>
      <Sketch />
    </main>
  </>
);

const StyledIndex = styled(Index)`
  ${threeCanvasStyle}

  section {
    position: absolute;
    right: 10vw;
    bottom: 10vh;
    transition: opacity 0.15s;

    a {
      color: #fff;
      text-decoration: none;
      word-break: keep-all;

      h1 {
        font-size: 10rem;
      }
    }
    :hover {
      opacity: 0.6;
    }
  }

  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    section {
      a {
        h1 {
          font-size: 6rem;
        }
      }
    }
  }
`;

export default ({ path }: any): JSX.Element => (
  <>
    <SEO title='Top' pathname={path} />
    <StyledIndex />
  </>
);
