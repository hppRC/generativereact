/** @jsx jsx */
import { useMemo } from 'react';
import { Canvas } from 'react-three-fiber';
import { css, jsx } from '@emotion/core';

const theme = css`
	width: 100vw;
	height: 100vh;
	background-color: #000;
`;

const Thing = () => {
	let positions = useMemo(() => [], []);
	let colors = useMemo(() => [], []);
	let x, y, z;
	for (let i = 0; i < 1000; i++) {
		x = Math.random() * 2.0 - 1.0;
		y = Math.random() * 2.0 - 1.0;
		z = Math.random() * 2.0 - 1.0;
		if (x * x + y * y + z * z <= 1) {
			positions.push(x * 500.0);
			positions.push(y * 10.0);
			positions.push(z * 500.0);
			colors.push(Math.random() * 255.0);
			colors.push(Math.random() * 255.0);
			colors.push(Math.random() * 255.0);
			colors.push(Math.random() * 255.0);
		}
	}

	return (
		<mesh castShadow receiveShadow>
			<bufferGeometry attach='geometry'>
				<bufferAttribute
					attachObject={['attributes', 'position']}
					count={positions.length / 3}
					array={positions}
					itemSize={3}
				/>
				<bufferAttribute
					attachObject={['attributes', 'color']}
					count={colors.length / 4}
					array={colors}
					itemSize={4}
					normalized
				/>
			</bufferGeometry>
			<meshStandardMaterial attach='material' args={[1, 1, 1]} />
		</mesh>
	);
};

const Work9 = () => (
	<div css={theme}>
		<Canvas camera={{ position: [0, 0, 500] }} shadowMap>
			<ambientLight />
			<spotLight castShadow position={[1, 0, 2]} />
			<Thing />
		</Canvas>
	</div>
);

export default Work9;
