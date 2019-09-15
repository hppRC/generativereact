import styled from 'styled-components';
import media from 'styled-media-query';

const WorksListTheme = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	display: flex;
	box-sizing: border-box;

	padding: 3rem;
	font-size: 2rem;
	color: #fff;
	line-height: 1.2;

	a {
		color: inherit;
		text-decoration: none;
	}

	${media.lessThan('medium')`
        font-size: 1rem;
    `}

	canvas {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	}
`;

export default WorksListTheme;
