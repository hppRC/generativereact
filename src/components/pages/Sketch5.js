import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch5 from '../sketches/sketch5';

class Cursor extends React.Component {
	constructor() {
		super();
		this.state = {
			top: 0,
			left: 0
		};
		this.handleMove = this.handleMove.bind(this);
	}

	componentDidMount() {
		window.addEventListener('mousemove', this.handleMove);
	}

	componentWillUnmount() {
		window.removeEventListener('mousemove', this.handleMove);
	}

	handleMove(e) {
		this.setState({
			top: e.pageY,
			left: e.pageX
		});
	}

	render() {
		const css = {
			position: 'absolute',
			borderRadius: '50%',
			width: '10px',
			height: '10px',
			backgroundColor: '#000000c0',
			top: this.state.top - 5,
			left: this.state.left - 5,
			cursor: 'none',
			posinterEvents: 'none',
			zIndex: 1001
		};

		return <div style={css}></div>;
	}
}

class Follower extends React.Component {
	constructor() {
		super();
		this.state = {
			top: 0,
			left: 0,
			width: 500,
			height: 500
		};
		this.handleMove = this.handleMove.bind(this);
	}

	componentDidMount() {
		window.addEventListener('mousemove', this.handleMove);
	}

	componentWillUnmount() {
		window.removeEventListener('mousemove', this.handleMove);
	}

	handleMove(e) {
		this.setState({
			top: e.pageY,
			left: e.pageX
		});
	}

	render() {
		const css = {
			position: 'absolute',
			top: this.state.top - this.state.height / 2,
			left: this.state.left - this.state.width / 2,
			cursor: 'none',
			posinterEvents: 'none',
			zIndex: 1000
		};

		return (
			<div style={css}>
				<P5Wrapper
					sketch={sketch5}
					top={this.state.top}
					left={this.state.left}
				/>
			</div>
		);
	}
}

const Sketch5 = () => (
	<div>
		<Cursor />
		<Follower />
	</div>
);

export default Sketch5;
