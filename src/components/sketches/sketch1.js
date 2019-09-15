const sketch1 = p => {
	const NORTH = 0;
	const EAST = 1;
	const SOUTH = 2;
	const WEST = 3;
	let direction = SOUTH;

	const stepSize = 30;
	const minLength = 30;
	const angleCount = 7;
	let angle;
	let reachedBorder = false;

	const speed = 1;

	let posX;
	let posY;
	let posXcross;
	let posYcross;

	p.setup = () => {
		p.createCanvas(p.windowWidth, p.windowHeight);
		p.colorMode(p.HSB, 360, 100, 100, 100);
		p.background(0);

		angle = p.getRandomAngle(direction);
		posX = p.floor(p.random(p.width));
		posY = 5;
		posXcross = posX;
		posYcross = posY;
	};

	p.draw = () => {
		for (let i = 0; i <= speed; i++) {
			p.strokeWeight(3);
			p.stroke(0, 0, 360);
			p.point(posX, posY);
			p.point(p.width - posX, p.height - posY);

			posX += p.cos(p.radians(angle)) * stepSize;
			posY += p.sin(p.radians(angle)) * stepSize;

			reachedBorder = false;

			if (posY <= 5) {
				direction = SOUTH;
				reachedBorder = true;
			} else if (posX >= p.width - 5) {
				direction = WEST;
				reachedBorder = true;
			} else if (posY >= p.height - 5) {
				direction = NORTH;
				reachedBorder = true;
			} else if (posX <= 5) {
				direction = EAST;
				reachedBorder = true;
			}

			p.loadPixels();
			let currentPixel = p.get(p.floor(posX), p.floor(posY));
			if (
				reachedBorder ||
				(currentPixel[0] !== 0 &&
					currentPixel[1] !== 0 &&
					currentPixel[2] !== 0)
			) {
				angle = p.getRandomAngle(direction);

				const distance = p.dist(posX, posY, posXcross, posYcross);
				if (distance >= minLength) {
					p.strokeWeight(3);
					p.stroke(0, 0, 180);
					p.line(posX, posY, posXcross, posYcross);
				}

				posXcross = posX;
				posYcross = posY;
			}
		}
	};

	p.keyReleased = () => {
		if (p.key === 's' || p.key === 'S') {
			p.saveCanvas(p.gd.timestamp(), 'png');
		}
		if (p.keyCode === p.DELETE || p.keyCode === p.BACKSPACE) {
			p.background(360);
		}
	};

	p.getRandomAngle = currentDirection => {
		const a =
			((p.floor(p.random(-angleCount, angleCount)) + 0.5) * 90) /
			angleCount;
		if (currentDirection === NORTH) return a - 90;
		if (currentDirection === EAST) return a;
		if (currentDirection === SOUTH) return a + 90;
		if (currentDirection === WEST) return a + 180;
		return 0;
	};
};

export default sketch1;
