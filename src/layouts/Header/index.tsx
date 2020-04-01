import { Link } from 'gatsby';
import React from 'react';

import styled from '@emotion/styled';

const Header: React.FCX = ({ className }) => (
  <header className={className}>
    <Link to='/'>
      <h1>Generative React</h1>
    </Link>
    <nav>
      <ul>
        <li>
          <Link to='/'>Top</Link>
        </li>
        <li>
          <Link to='/works'>Works</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export const StyledHeader = styled(Header)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem;

  > a {
    color: #fff;
    text-decoration: none;
    transition: opacity 0.15s;

    :hover {
      opacity: 0.6;
    }
  }

  nav {
    padding: 2rem;
    padding-right: 0;
    ul {
      display: flex;
      justify-content: center;
      list-style: none;
      li {
        a {
          padding: 0 0 2rem 2rem;
          color: #fff;
          text-decoration: none;
          word-break: keep-all;

          transition: opacity 0.15s;

          :hover {
            opacity: 0.6;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    padding: 0.5rem;
    padding-right: 0;
    nav {
      padding: 0.5rem;
      ul li a {
        padding: 0.5rem;
      }
    }
  }
  @media screen and (max-height: 430px) {
  }
`;

export default StyledHeader;
