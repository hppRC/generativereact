/** @jsx jsx */
import * as THREE from 'three';
import { useState, useRef } from 'react';
import { apply, Canvas, useFrame } from 'react-three-fiber';
import * as meshline from 'three.meshline';
import Controls from '../../utils/orbitControls';

import { css, jsx } from '@emotion/core';

const theme = css`
	width: 100vw;
	height: 100vh;
	background-color: #000;
`;

apply(meshline);

const numLines = 300;
const lines = new Array(numLines).fill();
const colors = ['#011627', '#FDFFFC', '#2EC4B6', '#E71D36', '#FF9F1C'];

function Fatline() {
	const material = useRef();
	const [color] = useState(
		() => colors[parseInt(colors.length * Math.random())]
	);
	const [ratio] = useState(() => 0.5 + 0.5 * Math.random());
	const [width] = useState(() => Math.max(0.2, 0.6 * Math.random()));
	// Calculate wiggly curve
	const [curve] = useState(() => {
		let pos = new THREE.Vector3(
			25 - 50 * Math.random(),
			-20,
			20 - 40 * Math.random()
		);
		return new Array(30)
			.fill()
			.map(() =>
				pos
					.add(
						new THREE.Vector3(
							2 - Math.random() * 4,
							4 - Math.random() * 2,
							5 - Math.random() * 10
						)
					)
					.clone()
			);
	});

	useFrame(() => (material.current.uniforms.dashOffset.value += 0.0005));
	return (
		<mesh>
			<meshLine onUpdate={self => (self.parent.geometry = self.geometry)}>
				<geometry onUpdate={self => self.parent.setGeometry(self)}>
					<catmullRomCurve3
						args={[curve]}
						onUpdate={self =>
							(self.parent.vertices = self.getPoints(250))
						}
					/>
				</geometry>
			</meshLine>
			<meshLineMaterial
				attach='material'
				ref={material}
				transparent
				depthTest={false}
				lineWidth={width}
				color={color}
				dashArray={0.1}
				dashRatio={ratio}
			/>
		</mesh>
	);
}

function Scene() {
	let group = useRef();
	let theta = 0;
	useFrame(() =>
		group.current.rotation.set(
			5 * Math.sin(THREE.Math.degToRad((theta += 0.02))),
			0,
			0
		)
	);
	return (
		<group ref={group}>
			{lines.map((_, index) => (
				<Fatline key={index} />
			))}
		</group>
	);
}

const Work10 = () => (
	<div css={theme}>
		<Canvas camera={{ position: [0, 50, 10], fov: 45, zoom: 2 }}>
			<Scene />
			<Controls />
		</Canvas>
	</div>
);

export default Work10;
