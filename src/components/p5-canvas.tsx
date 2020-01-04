import p5 from 'p5';
import React, { useEffect, useMemo, useRef } from 'react';

import loadable, { LoadableComponent } from '@loadable/component';

const _p5: LoadableComponent<p5> = loadable.lib(() => import('p5/lib/p5.min'));

type Props = {
  sketch: (p: p5, props: any) => void;
  props?: any;
};

export const P5Canvas: React.FCX<Props> = ({ className, sketch, props }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (async () => {
        _p5
          .load()
          .then((p5: any) => {
            new p5.default((p: p5) => sketch(p, props), ref.current);
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

export default P5Canvas;
