/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect } from 'react';
import { Canvas, extend, useFrame, useThree } from 'react-three-fiber';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';

import fragment from './fragment.glsl';
import vertex from './vertex.glsl';

extend({ EffectComposer, RenderPass, ShaderPass });

const Thing = () => {
  const { mouse, clock } = useThree();

  const uniforms = {
    uAspect: {
      value: window.innerWidth / window.innerHeight,
    },
    uTime: {
      value: 0.0,
    },
    uMouse: {
      value: mouse,
    },
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMove = (e: any) => {
    e.preventDefault();
    const newPos = new THREE.Vector2(-1 + (2 * e.pageX) / window.outerWidth, 1 - (2 * e.pageY) / window.outerHeight);
    uniforms.uMouse.value.lerp(newPos, 0.2);
  };

  useEffect(() => {
    window.addEventListener(`touchmove`, handleMove, {
      passive: false,
    });

    return () => {
      window.removeEventListener(`touchmove`, handleMove);
    };
    // ↓this line is necessary to avoid a warning about React Hooks dependency↓
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFrame(() => {
    uniforms.uTime.value = clock.getElapsedTime();
    uniforms.uMouse.value.lerp(mouse, 0.2);
  });

  return (
    <mesh>
      <planeGeometry attach='geometry' args={[2, 2]} />
      <shaderMaterial attach='material' vertexShader={vertex} fragmentShader={fragment} uniforms={uniforms} />
    </mesh>
  );
};

const Sketch = (): JSX.Element => (
  <Canvas camera={{ position: [0, 10, 20] }}>
    <Thing />
  </Canvas>
);

export default Sketch;
