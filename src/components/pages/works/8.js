/** @jsx jsx */
import { useMemo, useRef } from 'react';
import { Canvas, extend, useFrame, useThree } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { css, jsx } from '@emotion/core';

extend({ OrbitControls });

const theme = css`
	width: 100vw;
	height: 100vh;
	background-color: #000;
`;

const Particles = ({ pointCount }) => {
	const [positions, colors] = useMemo(() => {
		let positions = [],
			colors = [];
		for (let i = 0; i < pointCount; i++) {
			positions.push(200 - Math.random() * 400);
			positions.push(200 - Math.random() * 400);
			positions.push(200 - Math.random() * 400);
			colors.push(Math.random(1));
			colors.push(Math.random(1));
			colors.push(Math.random(1));
		}
		return [new Float32Array(positions), new Float32Array(colors)];
	}, [pointCount]);

	const attrib = useRef();

	return (
		<mesh>
			<bufferGeometry attach='geometry'>
				<bufferAttribute
					attachObject={['attributes', 'position']}
					count={positions.length / 3}
					array={positions}
					itemSize={3}
				/>
				<bufferAttribute
					ref={attrib}
					attachObject={['attributes', 'color']}
					count={colors.length / 3}
					array={colors}
					itemSize={3}
				/>
			</bufferGeometry>
			<meshBasicMaterial
				attach='material'
				vertexColors
				size={10}
				sizeAttenuation={false}
			/>
		</mesh>
	);
};

const Controls = () => {
	const controls = useRef();
	const { camera, gl } = useThree();
	useFrame(() => controls.current.update());
	return (
		<orbitControls
			ref={controls}
			args={[camera, gl.domElement]}
			enableDamping
			dampingFactor={0.1}
			rotateSpeed={0.5}
		/>
	);
};
const Work8 = () => (
	<div css={theme}>
		<Canvas orthographic camera={{ zoom: 10 }}>
			<Particles pointCount={10000} />
			<fog color='#272727' near={0} far={100} />
			<Controls />
		</Canvas>
	</div>
);

export default Work8;
