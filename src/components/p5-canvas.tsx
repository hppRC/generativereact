import p5 from 'p5/lib/p5.min';
import React, { useEffect } from 'react';

import styled from '@emotion/styled';

type Props = {
  sketch: any;
};

const P5Canvas: React.FCX<Props> = ({ className, sketch }) => {
  useEffect(() => {
    new p5(sketch);
  }, [sketch]);
  return <div className={className} />;
};

export const StyledP5Canvas = styled(P5Canvas)``;

export default typeof window !== 'undefined' && StyledP5Canvas;
