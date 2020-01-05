import React from 'react';

import styled from '@emotion/styled';

const Footer: React.FCX = ({ className }) => (
  <footer className={className}>
    Copyright © 2019{' '}
    <a href='https://github.com/hppRC/generativereact'>hppRC</a> All Rights
    Reserved.
  </footer>
);

export const StyledFooter = styled(Footer)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 5vh;

  a {
    padding: 0 1rem;
    color: #fff;
    text-decoration: none;
  }
`;

export default StyledFooter;
