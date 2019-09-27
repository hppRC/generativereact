/** @jsx jsx */
import * as CANNON from 'cannon';
import { Canvas } from 'react-three-fiber';
import { css, jsx } from '@emotion/core';
import { useCannon, Provider } from '../../utils/useCannon';
import Controls from '../../utils/orbitControls';

const theme = css`
	width: 100vw;
	height: 100vh;
	background-color: #000;
`;

const Plane = ({ position, quaternion = [0, 0, 0], rotateRadian = 0 }) => {
	const ref = useCannon({ mass: 0 }, body => {
		body.addShape(new CANNON.Plane());
		body.quaternion.setFromAxisAngle(
			new CANNON.Vec3(...quaternion),
			rotateRadian
		);
		body.position.set(...position);
	});

	return (
		<mesh ref={ref}>
			<planeBufferGeometry attach='geometry' args={[1000, 1000]} />
			<meshPhongMaterial attach='material' color='#000' />
		</mesh>
	);
};

const Box = ({ position, args, key = 0, mass = 1, color = '#272727' }) => {
	const ref = useCannon({ mass: mass }, body => {
		body.addShape(new CANNON.Box(new CANNON.Vec3(1, 1, 1)));
		body.position.set(...position);
	});
	return (
		<mesh ref={ref} castShadow receiveShadow key={key}>
			<boxGeometry attach='geometry' args={args} />
			<meshNormalMaterial attach='material' color={color} />
		</mesh>
	);
};

export const Work7 = () => {
	return (
		<div css={theme}>
			<Canvas camera={{ position: [0, 10, 20] }}>
				<ambientLight intensity={0.5} />
				<spotLight
					intensity={1}
					position={[0, 0, 0]}
					angle={0}
					penumbra={1}
					castShadow
				/>
				<Provider gravity={[0, 0, -1]}>
					<Plane position={[0, 0, 0]} quaternion={[1, 0, 0]} />
					{new Array(500).fill().map((_, i) => (
						<Box
							position={[
								Math.random() * 20 - 10,
								Math.random() * 20 - 10,
								Math.random() * 1000 + 15
							]}
							args={[2, 2, 2]}
							key={i}
						/>
					))}
				</Provider>
				<Controls />
			</Canvas>
		</div>
	);
};
export default Work7;
