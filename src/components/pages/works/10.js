/** @jsx jsx */
import * as THREE from 'three';
import { Canvas, useFrame } from 'react-three-fiber';
import { css, jsx } from '@emotion/core';

const theme = css`
	width: 100vw;
	height: 100vh;
	background-color: #000;
`;

const Work10 = () => (
	<div css={theme}>
		<Canvas></Canvas>
	</div>
);

export default Work10;
