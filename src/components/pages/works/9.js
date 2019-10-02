/** @jsx jsx */
import { useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { css, jsx } from '@emotion/core';

const theme = css`
	width: 100vw;
	height: 100vh;
	background-color: #000;
`;

const vertexSource = `
varying vec2 vUv;

void main() {
  vUv = uv;// uv: ShaderMaterialで補完される vec2 型(xy)の変数。テクスチャ座標のこと。

  gl_Position = vec4( position, 1.0 );
}
`;

const fragmentSource = `
varying vec2 vUv;

uniform float uAspect;
uniform float uTime;
uniform vec2  uMouse;

void main() {
	vec2 uv = vec2( vUv.x * uAspect, vUv.y );
	vec2 center = vec2( uMouse.x * uAspect, uMouse.y );
	float radius = 0.1 + sin( uTime ) * 0.05 ;
	float lightness = radius / length ( uv - vec2(0.5 * uAspect, 0.5) - center * 0.5 );
	//lightness = clamp( lightness, 0.0, 1.0 );
	vec4 color = vec4( vec3( lightness ), 1.0 );
	color *= vec4( uv, 0.9, 1.0 );

	gl_FragColor = color;
}
`;

const Thing = () => {
	const { mouse, size } = useThree();

	const uniforms = {
		uAspect: {
			value: size.width / size.height
		},
		uTime: {
			value: 0.0
		},
		uMouse: {
			value: mouse
		}
	};

	const [positions] = useState([]);
	const [colors] = useState([]);
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

	useFrame(({ clock, size }) => {
		uniforms.uTime.value = clock.getElapsedTime();
		uniforms.uAspect.value = size.width / size.height;
	});

	return (
		<mesh castShadow receiveShadow>
			<bufferGeometry>
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
				/>
			</bufferGeometry>
			<shaderMaterial
				attach='material'
				vertexShader={vertexSource}
				fragmentShader={fragmentSource}
				uniforms={uniforms}
			/>
		</mesh>
	);
};

/*
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
				/>
			</bufferGeometry>
*/

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
