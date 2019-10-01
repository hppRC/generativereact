/** @jsx jsx */

import { useRef, useEffect } from 'react';
import { Canvas, useThree, useFrame, extend } from 'react-three-fiber';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';
import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass';
import { css, jsx } from '@emotion/core';

extend({ EffectComposer, RenderPass, ShaderPass, GlitchPass, BloomPass });

const theme = css`
	width: 100vw;
	height: 100vh;
	background-color: #000;
`;

const Effect = () => {
	const { gl, scene, camera, size } = useThree();
	const composer = useRef();

	useEffect(() => {
		composer.current.setSize(size.width, size.height);
	}, [size]);

	useFrame(() => {
		composer.current.render();
	}, 1);

	return (
		<effectComposer ref={composer} args={[gl]}>
			<renderPass attachArray='passes' args={[scene, camera]} />
			<glitchPass attachArray='passes' />
			<shaderPass
				attachArray='passes'
				args={[FXAAShader]}
				uniforms-resolution-value={[1 / size.width, 1 / size.height]}
				renderToScreen
			/>
		</effectComposer>
	);
};

const Work9 = () => (
	<div css={theme}>
		<Canvas camera={{ position: [0, 1, 3] }} shadowMap>
			<ambientLight />
			<spotLight castShadow position={[1, 0, 2]} />
			<mesh castShadow receiveShadow>
				<boxGeometry attach='geometry' args={[1, 1, 1]} />
				<meshStandardMaterial attach='material' />
			</mesh>
			<Effect />
		</Canvas>
	</div>
);

export default Work9;
