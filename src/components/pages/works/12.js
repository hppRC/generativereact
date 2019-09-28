/** @jsx jsx */
import React, { useEffect, useRef, useMemo, useState } from 'react';
import * as THREE from 'three';
import { extend, Canvas, useFrame, useThree } from 'react-three-fiber';
import { css, jsx } from '@emotion/core';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';

extend({ EffectComposer, RenderPass, ShaderPass });

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
	float radius = 0.2 + sin( uTime ) * 0.025 ;
	float lightness = radius / length ( uv - vec2(0.5*uAspect, 0.5) - center * 0.5 );
	//lightness = clamp( lightness, 0.0, 1.0 );
	vec4 color = vec4( vec3( lightness ), 1.0 );
	color *= vec4( uv, 0.5, 1.0 );

	gl_FragColor = color;
}
`;

const theme = css`
	width: 100vw;
	height: 100vh;
	background-color: #000;
`;

const Thing = () => {
	const { mouse, clock } = useThree();

	const uniforms = {
		uAspect: {
			value: window.innerWidth / window.innerHeight
		},
		uTime: {
			value: 0.0
		},
		uMouse: {
			value: mouse
		}
	};

	useEffect(() => {
		window.addEventListener('touchmove', handleMove, {
			passive: false
		});

		return () => {
			window.removeEventListener('touchmove', handleMove);
		};
	}, []);

	const handleMove = e => {
		e.preventDefault();
		const newPos = new THREE.Vector2(
			-1 + (2 * e.pageX) / window.outerWidth,
			1 - (2 * e.pageY) / window.outerHeight
		);
		uniforms.uMouse.value.lerp(newPos, 0.2);
	};

	useFrame(() => {
		uniforms.uTime.value = clock.getElapsedTime();
		uniforms.uMouse.value.lerp(mouse, 0.2);
	});

	return (
		<mesh>
			<planeGeometry attach='geometry' args={[2, 2]} />
			<shaderMaterial
				attach='material'
				vertexShader={vertexSource}
				fragmentShader={fragmentSource}
				uniforms={uniforms}
			/>
		</mesh>
	);
};

const Work12 = () => {
	return (
		<div css={theme}>
			<Canvas camera={{ position: [0, 10, 20] }}>
				<Thing />
			</Canvas>
		</div>
	);
};

export default Work12;
