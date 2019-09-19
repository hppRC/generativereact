import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import styled from 'styled-components';

function Thing() {
	const ref = useRef();
	useFrame(() => (ref.current.rotation.z += 0.01));
	return (
		<mesh
			ref={ref}
			onClick={e => console.log('click')}
			onPointerOver={e => console.log('hover')}
			onPointerOut={e => console.log('unhover')}
		>
			<planeBufferGeometry attach='geometry' args={[1, 1]} />
			<meshBasicMaterial
				attach='material'
				color='hotpink'
				opacity={0.5}
				transparent
			/>
		</mesh>
	);
}

const Theme = styled.div`
	width: 100%;
	height: 100%;
`;

const Work7 = () => (
	<Canvas>
		<Thing />
	</Canvas>
);

export default Work7;
