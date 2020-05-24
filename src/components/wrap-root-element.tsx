import React from 'react';
import Layout from 'src/layouts';

import styled from '@emotion/styled';

type ContainerProps = { element: React.ReactNode };
type Props = ContainerProps;

// you can use this component for some providers for redux, context API, etc...
const Component: React.FCX<Props> = ({ element }) => <Layout>{element}</Layout>;

const StyledComponent = styled(Component)``;

const Container: React.FCX<ContainerProps> = (props) => <StyledComponent {...props} />;

export default Container;
