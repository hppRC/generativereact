import React, { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import loadable from '@loadable/component';

const _p5 = loadable.lib(() => import('p5/lib/p5.min'));

type Props = {
  sketch: (p: any) => void;
};

const P5Canvas: React.FCX<Props> = ({ className, sketch, ...props }) => {
  const [, setP5] = useState();
  const wrapper = React.createRef<any>();
  let canvas;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (async () => {
        const p5 = await _p5.load();
        canvas = new p5.default(sketch, wrapper.current);
        setP5(canvas);
        if (canvas.myCustomRedrawAccordingToNewPropsHandler) {
          canvas.myCustomRedrawAccordingToNewPropsHandler(props);
        }
      })();
    }
  }, [sketch]);

  return <div ref={wrapper} className={className} />;
};

export const StyledP5Canvas = styled(P5Canvas)``;

export default StyledP5Canvas;
