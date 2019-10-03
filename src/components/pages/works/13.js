import * as THREE from 'three';
import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from 'react-three-fiber';

const theme = {
	width: '100vw',
	height: '100vh',
	backgroundColor: '#272727'
};

const dummy = new THREE.Object3D();

const Suzanne = () => {
	// Load async model
	const [geometry] = useLoader(THREE.BufferGeometryLoader, './suzanne.json');
	// When we're here it's loaded, now compute vertex normals
	useMemo(() => {
		geometry.computeVertexNormals();
		//geometry.scale(0.5, 0.5, 0.5);
	}, [geometry]);
	// Compute per-frame instance positions
	const ref = useRef();
	useFrame(state => {
		const time = state.clock.getElapsedTime();
		ref.current.rotation.x = Math.sin(time / 4);
		ref.current.rotation.y = Math.sin(time / 2);
		let i = 0;
		for (let x = 0; x < 10; x++)
			for (let y = 0; y < 10; y++)
				for (let z = 0; z < 10; z++) {
					dummy.position.set(5 - x, 5 - y, 5 - z);
					dummy.rotation.x = 3 * Math.sin(x / 4 + time);
					dummy.rotation.y = Math.sin(x / 4 + time);
					dummy.rotation.z = dummy.rotation.y ** 2;
					dummy.updateMatrix();
					ref.current.setMatrixAt(i++, dummy.matrix);
				}
		ref.current.instanceMatrix.needsUpdate = true;
	});
	return (
		<instancedMesh ref={ref} args={[geometry, null, 1000]}>
			<meshPhongMaterial attach='material' color='#a68391' />
		</instancedMesh>
	);
};

const Work13 = () => (
	<Canvas style={theme} camera={{ position: [0, 0, 15] }}>
		<spotLight position={[0, 10, 10]} />
		<Suspense fallback={null}>
			<Suzanne />
		</Suspense>
	</Canvas>
);

export default Work13;
