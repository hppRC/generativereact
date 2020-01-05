import React from 'react';
import { SEO, StyledForm } from 'src/components';
import { Layout } from 'src/layouts';
import baseStyle from 'src/styles/base-style';

import styled from '@emotion/styled';

const Contact: React.FCX = ({ className }) => (
  <main className={className}>
    <h1>Contact</h1>
    <StyledForm />
  </main>
);

const StyledContact = styled(Contact)`
  ${baseStyle};
`;

export default () => (
  <Layout>
    <SEO title='Contact' pathname='/contact' />
    <StyledContact />
  </Layout>
);
