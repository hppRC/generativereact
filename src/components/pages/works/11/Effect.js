import React, { useEffect, useRef } from 'react';
import { useThree, useFrame, extend } from 'react-three-fiber';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader';

extend({ EffectComposer, RenderPass, ShaderPass, FilmPass, GlitchPass });

export const Effect = () => {
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
			<glitchPass attachArray='passes' args={[100]} />

			<shaderPass
				attachArray='passes'
				args={[FXAAShader]}
				uniforms-resolution-value={[1 / size.width, 1 / size.height]}
				renderToScreen
			/>
		</effectComposer>
	);
};
