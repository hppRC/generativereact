import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from 'three';

import Controls from '../orbit-controls';
import fragment from './fragment.glsl';
import vertex from './vertex.glsl';

const Thing = () => {
  const ref = useRef<any>();

  const uniforms = {
    time: {
      value: 0.0
    },
    randx: { value: 1 + Math.random() },
    randy: {
      value: 1 + Math.random()
    },
    randz: {
      value: 1 + Math.random()
    }
  };

  const [positions, colors] = useMemo(() => {
    let positions = [];
    let colors = [];
    let x, y, z;
    for (let i = 0; i < 100000; i++) {
      x = Math.random() * 2.0 - 1.0;
      y = Math.random() * 2.0 - 1.0;
      z = Math.random() * 2.0 - 1.0;

      positions.push(x);
      positions.push(y);
      positions.push(z);
      colors.push(Math.random() * 255.0);
      colors.push(Math.random() * 255.0);
      colors.push(Math.random() * 255.0);
      colors.push(Math.random() * 255.0);
    }
    return [positions, colors];
  }, []);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    uniforms.time.value = time;

    ref.current.rotation.x += (Math.PI / 720) * Math.sin(0.01 * time);
    ref.current.rotation.y += Math.PI / 1440;
  });

  return (
    <points ref={ref}>
      <bufferGeometry attach='geometry'>
        <bufferAttribute
          attachObject={['attributes', 'position']}
          count={positions.length / 3}
          array={new Float32Array(positions)}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={['attributes', 'color']}
          count={colors.length / 4}
          array={new Uint8Array(colors)}
          itemSize={4}
          normalized
        />
      </bufferGeometry>
      <shaderMaterial
        attach='material'
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={uniforms}
        side={THREE.DoubleSide}
        transparent
      />
    </points>
  );
};

export const Sketch: React.FCX = () => {
  const val = typeof window === 'undefined' ? 0 : window.innerHeight / window.innerWidth;
  return (
    <Canvas
      camera={{
        position: [0, 0, 1 + val]
      }}
      shadowMap
    >
      <Thing />
      <Controls />
    </Canvas>
  );
};
export default Sketch;
