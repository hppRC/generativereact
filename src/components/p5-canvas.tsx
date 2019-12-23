import React, { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import loadable from '@loadable/component';

const _p5 = loadable.lib(() => import('p5/lib/p5.min'));

type Props = {
  sketch: any;
};

const P5Canvas: React.FCX<Props> = ({ className, sketch }) => {
  const [, setP5] = useState();
  const wrapper = React.createRef<any>();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      _p5.load().then((p5: any) => {
        setP5(new p5.default(sketch, wrapper.current));
      });
    }
  }, [sketch]);

  return <div ref={wrapper} className={className} />;
};

export const StyledP5Canvas = styled(P5Canvas)``;

export default StyledP5Canvas;
