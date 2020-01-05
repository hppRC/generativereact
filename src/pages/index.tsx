import { Link } from 'gatsby';
import React from 'react';
import { P5Canvas, SEO } from 'src/components';
import { Layout } from 'src/layouts';
import sketch from 'src/resources/index';
import { baseStyle, standardCanvasStyle } from 'src/styles';

import styled from '@emotion/styled';

const Index: React.FCX = ({ className }) => (
  <>
    <main className={className}>
      <section>
        <Link to='/works'>
          <h1>Genarative React</h1>
        </Link>
      </section>
      <P5Canvas sketch={sketch} />
    </main>
  </>
);

const StyledIndex = styled(Index)`
  ${baseStyle};
  ${standardCanvasStyle};

  section {
    position: absolute;
    bottom: 10vh;
    right: 10vw;
    a {
      word-break: keep-all;
      color: #fff;
      text-decoration: none;
      h1 {
        font-size: 10rem;
      }
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

export default () => (
  <Layout>
    <SEO title='Top' pathname='/' />
    <StyledIndex />
  </Layout>
);
