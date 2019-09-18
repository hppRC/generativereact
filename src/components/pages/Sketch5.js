import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch5 from '../sketches/sketch5';
import Sketch5Theme, { TitleTheme } from '../themes/sketch5Theme';

class Cursor extends React.Component {
	constructor() {
		super();
		this.state = {
			top: 0,
			left: 0,
			width: 300,
			height: 300
		};
		this.handleMove = this.handleMove.bind(this);
	}

	componentDidMount() {
		window.addEventListener('mousemove', this.handleMove, {
			passive: false
		});
		window.addEventListener('touchmove', this.handleMove, {
			passive: false
		});
	}

	componentWillUnmount() {
		window.removeEventListener('mousemove', this.handleMove);
		window.removeEventListener('touchmove', this.handleMove);
	}

	handleMove(e) {
		e.preventDefault();
		this.setState({
			top: e.pageY,
			left: e.pageX
		});
	}

	render() {
		const css = {
			position: 'absolute',
			width: '10px',
			height: '10px',
			top: this.state.top - this.state.height / 2,
			left: this.state.left - this.state.width / 2,
			cursor: 'none',
			pointerEvents: 'none',
			zIndex: 1001
		};

		return (
			<div style={css}>
				<P5Wrapper sketch={sketch5} />
			</div>
		);
	}
}

const Title = () => (
	<TitleTheme>
		<a href='http://hpprc.com'>Portfolio</a>
	</TitleTheme>
);

const Sketch5 = () => (
	<Sketch5Theme>
		<Cursor />
		<Title />
	</Sketch5Theme>
);

export default Sketch5;
