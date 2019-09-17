const sketch5 = p => {
	let top;
	let left;

	p.setup = () => {
		p.createCanvas(500, 500);
	};

	p.myCustomRedrawAccordingToNewPropsHandler = props => {
		if (props.op !== null) {
			top = props.top;
		}
		if (props.left !== null) {
			left = props.left;
		}
	};

	p.draw = () => {
		p.noStroke();
		p.fill('#124918');
		p.ellipse(p.width / 2, p.height / 2, 300);
	};
};

export default sketch5;
