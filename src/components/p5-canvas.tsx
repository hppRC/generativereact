import React, { useLayoutEffect, useMemo, useRef } from 'react';

import styled from '@emotion/styled';
import loadable from '@loadable/component';

const _p5 = loadable.lib(() => import('p5/lib/p5.min'));

type Props = {
  sketch: (p: any, props: any) => void;
  props?: any;
};

const P5Canvas: React.FCX<Props> = ({ className, sketch, props }) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      (async () => {
        _p5
          .load()
          .then((p5: any) => {
            new p5.default((p: any) => sketch(p, props), ref.current);
          })
          .catch((error: Error) => console.error(error));
      })();
    }
  }, [sketch, props]);

  return useMemo(() => <div ref={ref} className={className} />, [
    sketch,
    props
  ]);
};

export const StyledP5Canvas = styled(P5Canvas)``;

export default StyledP5Canvas;
