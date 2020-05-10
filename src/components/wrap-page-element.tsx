import React, { ReactNode } from 'react';
import Layout from 'src/layouts';

export const WrapPageElement = ({ element }: { element: ReactNode }) => <Layout>{element}</Layout>;

export default WrapPageElement;
