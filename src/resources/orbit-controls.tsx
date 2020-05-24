/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from 'react';
import { extend, useFrame, useThree } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

export const Controls = ({ dampingFactor = 0.5, rotateSpeed = 0.5 }): JSX.Element => {
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
