const worksListSketch = p => {
	let agents = [];
	const agentCount = 1000;
	const noiseScale = 100;
	const noiseStrength = 10;
	const noiseZRange = 0.5;
	const noiseZVelocity = 0.01;
	const overlayAlpha = 0.1;
	const agentAlpha = 90;
	const strokeWidth = 0.1;
	let drawMode = 1;

	p.setup = () => {
		p.createCanvas(p.windowWidth, p.windowHeight);
		for (let i = 0; i < agentCount; i++) {
			agents[i] = new Agent(noiseZRange);
		}
		p.background(0);
	};

	p.draw = () => {
		p.fill(0, overlayAlpha);
		p.noStroke();
		p.rect(0, 0, p.width, p.height);

		p.stroke(255, agentAlpha);
		for (let i = 0; i < agentCount; i++) {
			if (drawMode === 1) {
				agents[i].update1(
					strokeWidth,
					noiseScale,
					noiseStrength,
					noiseZVelocity
				);
			} else {
				agents[i].update2(
					strokeWidth,
					noiseScale,
					noiseStrength,
					noiseZVelocity
				);
			}
		}
	};

	p.keyReleased = function() {
		if (p.key === 's' || p.key === 'S')
			p.saveCanvas(p.gd.timestamp(), 'png');
		if (p.key === '1') drawMode = 1;
		if (p.key === '2') drawMode = 2;
		if (p.key === ' ') {
			const newNoiseSeed = p.floor(p.random(10000));
			p.noiseSeed(newNoiseSeed);
		}
		if (p.keyCode === p.DELETE || p.keyCode === p.BACKSPACE)
			p.background(255);
	};

	class Agent {
		constructor(noiseZRange) {
			this.vector = p.createVector(p.random(p.width), p.random(p.height));
			this.vectorOld = this.vector.copy();
			this.stepSize = p.random(1, 5);
			this.angle = 0;
			this.noiseZ = p.random(noiseZRange);
		}

		update = (strokeWidth, noiseZVelocity) => {
			this.vector.x += p.cos(this.angle) * this.stepSize;
			this.vector.y += p.sin(this.angle) * this.stepSize;

			if (this.vector.x < -10)
				this.vector.x = this.vectorOld.x = p.width + 10;
			if (this.vector.x > p.width + 10)
				this.vector.x = this.vectorOld.x = -10;
			if (this.vector.y < -10)
				this.vector.y = this.vectorOld.y = p.height + 10;
			if (this.vector.y > p.height + 10)
				this.vector.y = this.vectorOld.y = -10;

			p.strokeWeight(strokeWidth * this.stepSize);
			p.line(
				this.vectorOld.x,
				this.vectorOld.y,
				this.vector.x,
				this.vector.y
			);
			this.vectorOld = this.vector.copy();
			this.noiseZ += noiseZVelocity;
		};

		update1 = (strokeWidth, noiseScale, noiseStrength, noiseZVelocity) => {
			this.angle =
				p.noise(
					this.vector.x / noiseScale,
					this.vector.y / noiseScale,
					this.noiseZ
				) * noiseStrength;
			this.update(strokeWidth, noiseZVelocity);
		};

		update2 = (strokeWidth, noiseScale, noiseStrength, noiseZVelocity) => {
			this.angle =
				p.noise(
					this.vector.x / noiseScale,
					this.vector.y / noiseScale,
					this.noiseZ
				) * p.millis();
			this.angle = (this.angle - p.floor(this.angle)) * noiseStrength;
			this.update(strokeWidth, noiseZVelocity);
		};
	}
};

export default worksListSketch;
