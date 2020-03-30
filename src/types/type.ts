// please refer to this article: https://qiita.com/Takepepe/items/f66c7e2e1d22b431f148
import React from 'react';
import { extend, ReactThreeFiber } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

declare module 'react' {
  type FCX<P = {}> = React.FunctionComponent<P & { className?: string }>;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Node<OrbitControls, typeof OrbitControls>;
    }
  }
}