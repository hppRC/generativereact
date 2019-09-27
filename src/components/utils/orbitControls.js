import React, { useRef } from 'react';
import { useThree, useFrame } from 'react-three-fiber';

const Controls = ({ dampingFactor = 0.5, rotateSpeed = 0.5 }) => {
	const controls = useRef();
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
