import React from 'react';
import { Form, SEO } from 'src/components';
import { baseStyle } from 'src/styles';

import styled from '@emotion/styled';

const Contact: React.FCX = ({ className }) => (
  <main className={className}>
    <h1>Contact</h1>
    <Form />
  </main>
);

const StyledContact = styled(Contact)`
  ${baseStyle}
`;

export default ({ path }: any): JSX.Element => (
  <>
    <SEO title='Contact' pathname={path} />
    <StyledContact />
  </>
);
