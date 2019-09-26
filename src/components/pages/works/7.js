/** @jsx jsx */
import * as THREE from 'three';
import * as CANNON from 'cannon';
import React, { useEffect, useState, useContext } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { css, jsx } from '@emotion/core';
import { useCannon, Provider } from '../../utils/useCannon';

const theme = css`
	width: 100vw;
	height: 100vh;
	background-color: #272727;
`;

const Plane = ({ position }) => {
	const ref = useCannon({ mass: 0 }, body => {
		body.addShape(new CANNON.Plane());
		body.position.set(...position);
	});

	useFrame(() => {
		ref.current.rotation.z += 1;
	});
	return (
		<mesh ref={ref} receiveShadow>
			<planeBufferGeometry attach='geometry' args={[1000, 1000]} />
			<meshPhongMaterial attach='material' color='#272727' />
		</mesh>
	);
};

const Box = ({ position, args }) => {
	const ref = useCannon({ mass: 100000 }, body => {
		body.addShape(new CANNON.Box(new CANNON.Vec3(1, 1, 1)));
		body.position.set(...position);
	});
	return (
		<mesh ref={ref} castShadow receiveShadow>
			<boxGeometry attach='geometry' args={args} />
			<meshStandardMaterial attach='material' />
		</mesh>
	);
};

export const Work7 = () => {
	return (
		<div css={theme}>
			<Canvas
				camera={{ position: [0, 5, 15] }}
				onCreated={({ gl }) => (
					(gl.shadowMap.enabled = true),
					(gl.shadowMap.type = THREE.PCFSoftShadowMap)
				)}
			>
				<ambientLight intensity={0.5} />
				<spotLight
					intensity={0.6}
					position={[0, 300, 0]}
					angle={1}
					penumbra={1}
					castShadow
				/>
				<Provider gravity={[0, 0, -1]}>
					<Plane position={[0, 0, -10]} />
					{new Array(100).fill().map(_ => (
						<Box
							position={[
								Math.random() * 20 - 10,
								Math.random() * 20 - 10,
								Math.random() * 800
							]}
							args={[2, 2, 2]}
						/>
					))}
				</Provider>
			</Canvas>
		</div>
	);
};
export default Work7;
