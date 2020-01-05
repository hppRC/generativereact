import React, { useRef } from 'react';
import { extend, ReactThreeFiber, useFrame, useThree } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Node<OrbitControls, typeof OrbitControls>;
    }
  }
}

export const Controls = ({ dampingFactor = 0.5, rotateSpeed = 0.5 }) => {
  const controls = useRef<any>();
  const { camera, gl } = useThree();
  useFrame(() => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, gl.domElement]}
      enableDamping
      dampingFactor={dampingFactor}
      rotateSpeed={rotateSpeed}
    />
  );
};

export default Controls;
