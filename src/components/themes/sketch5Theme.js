import styled from 'styled-components';

const Sketch5Theme = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: #000;
	z-index: -1;
	cursor: none;
	overflow: hidden;

	&::after {
		content: '';
		position: fixed;
		display: block;
		top: -200vw;
		left: -200vw;
		width: 500vw;
		height: 500vh;
		background-color: #000;
		z-index: -10;
	}
`;

export const TitleTheme = styled.h1`
	display: inline-box;
	position: relative;
	top: 30vh;
	left: 10vw;
	a {
		font-size: 10vw;
		color: #fff;
		text-decoration: none;
		cursor: none;
	}
`;

export default Sketch5Theme;
