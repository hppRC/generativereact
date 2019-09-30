/** @jsx jsx */
import * as THREE from 'three';
import React, { useEffect, useRef, useMemo } from 'react';
import { Canvas, useThree, useFrame, extend } from 'react-three-fiber';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader';
import {
	AdditiveBlendingShader,
	VolumetricLightShader
} from '../../resources/shader/index';
import { css, jsx } from '@emotion/core';

const theme = css`
	width: 100vw;
	height: 100vh;
	background: radial-gradient(
		at 50% 60%,
		#873740 0%,
		#272730 40%,
		#171720 80%,
		#070710 100%
	);
`;

extend({ EffectComposer, RenderPass, ShaderPass });

const DEFAULT_LAYER = 0;
const OCCLUSION_LAYER = 1;

function Torusknot({ layer = DEFAULT_LAYER }) {
	const ref = useRef();
	const Material = useMemo(
		() => `mesh${layer === DEFAULT_LAYER ? 'Physical' : 'Basic'}Material`,
		[layer]
	);
	const color = useMemo(
		() => (layer === DEFAULT_LAYER ? '#873740' : '#070707'),
		[layer]
	);
	useFrame(({ clock }) => {
		ref.current.position.x = Math.cos(clock.getElapsedTime()) * 1.5;
		ref.current.rotation.x += 0.01;
		ref.current.rotation.y += 0.01;
		ref.current.rotation.z += 0.01;
	});

	return (
		<mesh
			ref={ref}
			position={[0, 0, 2]}
			layers={layer}
			receiveShadow
			castShadow
		>
			<torusKnotBufferGeometry
				attach='geometry'
				args={[0.5, 0.15, 150, 32]}
			/>
			<Material
				attach='material'
				color={color}
				roughness={1}
				clearcoat={1}
				clearcoatRoughness={0.5}
			/>
		</mesh>
	);
}

function Effects() {
	const { gl, scene, camera, size } = useThree();
	const occlusionRenderTarget = useMemo(
		() => new THREE.WebGLRenderTarget(),
		[]
	);
	const occlusionComposer = useRef();
	const composer = useRef();
	const light = useRef();

	useEffect(() => {
		console.log(occlusionComposer.current);
		occlusionComposer.current.setSize(size.width, size.height);
		console.log(composer.current);
		composer.current.setSize(size.width, size.height);
	}, [size]);

	useFrame(() => {
		light.current.rotation.z += 0.005;
		camera.layers.set(OCCLUSION_LAYER);
		occlusionComposer.current.render();
		camera.layers.set(DEFAULT_LAYER);
		composer.current.render();
	}, 1);

	return (
		<>
			<mesh ref={light} layers={OCCLUSION_LAYER}>
				<boxBufferGeometry attach='geometry' args={[0.5, 20, 1]} />
				<meshBasicMaterial attach='material' color='lightblue' />
			</mesh>
			<effectComposer
				ref={occlusionComposer}
				args={[gl, occlusionRenderTarget]}
				renderToScreen={false}
			>
				<renderPass attachArray='passes' args={[scene, camera]} />
				<shaderPass
					attachArray='passes'
					args={[VolumetricLightShader]}
					needsSwap={false}
				/>
			</effectComposer>

			<effectComposer ref={composer} args={[gl]}>
				<renderPass attachArray='passes' args={[scene, camera]} />
				<shaderPass
					attachArray='passes'
					args={[AdditiveBlendingShader]}
					uniforms-tAdd-value={occlusionRenderTarget.texture}
				/>
				<shaderPass
					attachArray='passes'
					args={[FXAAShader]}
					uniforms-resolution-value={[
						1 / size.width,
						1 / size.height
					]}
					renderToScreen
				/>
			</effectComposer>
		</>
	);
}

const Work11 = () => {
	return (
		<div css={theme}>
			<Canvas shadowMap>
				<ambientLight />
				<pointLight />
				<spotLight
					castShadow
					intensity={4}
					angle={Math.PI / 10}
					position={[10, 10, 10]}
					shadow-mapSize-width={2048}
					shadow-mapSize-height={2048}
				/>
				<Torusknot />
				<Torusknot layer={OCCLUSION_LAYER} />
				<Effects />
			</Canvas>
		</div>
	);
};

export default Work11;
