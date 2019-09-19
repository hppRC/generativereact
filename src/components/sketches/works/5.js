const sketch5 = p => {
	let agent;
	let angle = 0;
	let agents = [];
	const agentCount = 10;

	p.setup = () => {
		p.createCanvas(300, 300);
		p.colorMode(p.HSB, 360, 100, 100, 100);
		p.angleMode(p.DEGREES);
		for (let i = 0; i < agentCount; i++) {
			agents[i] = new Agent(p.width, p.height, p.random(10));
		}
	};
	p.draw = () => {
		p.noStroke();

		p.translate(p.width / 2, p.height / 2);
		p.rotate(angle);
		for (let i = 0; i < agents.length; i++) {
			agent = agents[i];
			p.fill(
				p.abs(2 * angle + agent.posy) % 256,
				p.abs(p.sin(agent.posx) - agent.posy + angle) % 256,
				p.abs(agent.posy - p.abs(255 - angle)) % 256
			);
			p.ellipse(agent.posx, agent.posy, agent.radius);
		}
		angle += 1.7;
		if (agents.length < 250) {
			agents.push(new Agent(p.width, p.height, p.random(10)));
		}
		console.log(agents.length);
	};

	class Agent {
		constructor(maxWidth, maxHeight, radius) {
			this.radius = radius;
			this.posx = p.random(
				-(maxWidth / 2 - this.radius * 2) * p.sin(45),
				(maxWidth / 2 - this.radius * 2) * p.sin(45)
			);
			this.posy = p.random(
				-(maxHeight / 2 - this.radius * 2) * p.sin(45),
				(maxHeight / 2 - this.radius * 2) * p.sin(45)
			);
			this.orbitRadius = p.sqrt(
				p.pow(this.posx, 2) + p.pow(this.posy, 2)
			);
		}
	}
};

export default sketch5;
