import React, { Suspense, useEffect } from 'react';
import { a, useSprings } from 'react-spring/three';
import { Canvas, useLoader } from 'react-three-fiber';
// import { useAnyImage } from 'src/hooks';
import * as THREE from 'three';

const number = 35;
const colors = [`#85D2D2`, `#FCEEB5`, `#FEB5BF`];
const random = (i: number) => {
  const r = Math.random();
  return {
    position: [100 - Math.random() * 200, 100 - Math.random() * 200, i * 1.5],
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    scale: [1 + r * 14, 1 + r * 14, 1],
    rotation: [0, 0, THREE.MathUtils.degToRad(Math.round(Math.random()) * 45)],
  };
};

const data = new Array(number).fill(undefined).map(() => ({
  color: colors[Math.round(Math.random() * (colors.length - 1))],
  args: [3, 3, 10],
}));

const Content: React.FCX = () => {
  const image = useLoader(THREE.TextureLoader, `/icons/icon-512x512.png`);
  const [springs, set] = useSprings(number, (i) => ({
    from: random(i),
    ...random(i),
    config: { mass: 20, tension: 50, friction: 70 },
  }));
  useEffect(() => {
    setInterval(() => set((i) => ({ ...random(i), delay: i * 10 })), 5000);
  }, []);
  return (
    <>
      {data.map((d, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <a.mesh key={index} {...(springs[index] as any)} castShadow receiveShadow>
          <planeBufferGeometry attach='geometry' args={d.args as [number, number, number]} />
          <a.meshStandardMaterial
            attach='material'
            color={springs[index].color}
            roughness={0.75}
            metalness={0.5}
            map={image}
          />
        </a.mesh>
      ))}
    </>
  );
};

const Lights = () => (
  <group>
    <pointLight intensity={0.3} />
    <ambientLight intensity={2} />
    <spotLight
      castShadow
      intensity={0.2}
      angle={Math.PI / 7}
      position={[150, 150, 250]}
      penumbra={1}
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
    />
  </group>
);

const Sketch = (): JSX.Element => (
  <Canvas camera={{ position: [0, 0, 100] }}>
    <Lights />
    <Suspense fallback={null}>
      <Content />
    </Suspense>
  </Canvas>
);

export default Sketch;
