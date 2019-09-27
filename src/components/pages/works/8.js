/** @jsx jsx */
import { useMemo, useRef, useCallback } from 'react';
import { Canvas, extend, useRender, useThree } from 'react-three-fiber';
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
			positions.push(20 - Math.random() * 40);
			positions.push(20 - Math.random() * 40);
			positions.push(20 - Math.random() * 40);
			colors.push(1);
			colors.push(0.5);
			colors.push(0.5);
		}
		return [new Float32Array(positions), new Float32Array(colors)];
	}, [pointCount]);

	const attrib = useRef();
	const hover = useCallback(e => {
		e.stopPropagation();
		attrib.current.array[e.index * 3] *= 0.9;
		attrib.current.array[e.index * 3 + 1] *= 0.9;
		attrib.current.array[e.index * 3 + 2] *= 0.9;
		attrib.current.needsUpdate = true;
	}, []);

	const unhover = useCallback(e => {
		attrib.current.array[e.index * 3] *= 0.9;
		attrib.current.array[e.index * 3 + 1] *= 0.5;
		attrib.current.array[e.index * 3 + 2] *= 0.5;
		attrib.current.needsUpdate = true;
	}, []);

	return (
		<points onPointerOver={hover} onPointerOut={unhover}>
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
			<pointsMaterial
				attach='material'
				vertexColors
				size={10}
				sizeAttenuation={false}
			/>
		</points>
	);
};

const Controls = () => {
	const controls = useRef();
	const { camera, gl } = useThree();
	useRender(() => controls.current.update());
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
		<Canvas
			orthographic
			camera={{ zoom: 60 }}
			raycaster={{ params: { Points: { threshold: 0.2 } } }}
		>
			<Particles pointCount={10000} />
			<Controls />
		</Canvas>
	</div>
);

export default Work8;
