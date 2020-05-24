/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const sketch = (p: any): void => {
  const pointCount = 30;
  const lissajousPoints: any[] = [];
  let freqX = 25;
  let freqY = 19;
  let phi = 90;

  let modFreqX = 1;
  let modFreqY = 1;

  const lineWeight = 0.4;
  let lineColor: any;
  const lineAlpha = 50;

  const connectionRadius = 250;

  p.setup = () => {
    p.createCanvas(p.min(p.windowWidth, 750), p.min(p.windowHeight, 750));
    p.colorMode(p.RGB, 255, 255, 255, 100);
    p.noFill();

    lineColor = p.color(255);

    p.calculateLissajousPoints();
  };

  p.calculateLissajousPoints = () => {
    for (let i = 0; i <= pointCount; i += 1) {
      const angle = p.map(i, 0, pointCount, 0, p.TAU);

      let x = p.sin(angle * freqX + p.radians(phi)) * p.cos(angle * modFreqX);
      let y = p.sin(angle * freqY) * p.cos(angle * modFreqY);
      x *= p.width / 2 - 30;
      y *= p.height / 2 - 30;

      lissajousPoints[i] = p.createVector(x, y);
    }
  };

  p.draw = () => {
    p.background(`#09090f`);
    p.strokeWeight(lineWeight);
    p.push();
    p.translate(p.width / 2, p.height / 2);

    const shift = 0.0001 * (p.abs((p.millis() % 20000) - 10000) - 5000);
    for (let i = 0; i < pointCount; i += 1) {
      for (let j = 0; j < i; j += 1) {
        const d = lissajousPoints[i].dist(lissajousPoints[j]);
        const a = p.pow((connectionRadius + 1) / d, 2);

        if (d <= connectionRadius) {
          p.stroke(lineColor, a * lineAlpha);
          p.line(lissajousPoints[i].x, lissajousPoints[i].y, lissajousPoints[j].x, lissajousPoints[j].y);
        }
        lissajousPoints[i].x += shift;
        lissajousPoints[i].y += shift;
        lissajousPoints[j].x -= shift;
        lissajousPoints[j].y -= shift;
      }
    }
    p.pop();
  };

  p.keyPressed = () => {
    if (p.key === `s` || p.key === `S`) p.saveCanvas(p.gd.timestamp(), `png`);

    if (p.key === `1`) freqX -= 1;
    if (p.key === `2`) freqX += 1;
    freqX = p.max(freqX, 1);

    if (p.key === `3`) freqY -= 1;
    if (p.key === `4`) freqY += 1;
    freqY = p.max(freqY, 1);

    if (p.keyCode === p.LEFT_ARROW) phi -= 15;
    if (p.keyCode === p.RIGHT_ARROW) phi += 15;

    if (p.key === `7`) modFreqX -= 1;
    if (p.key === `8`) modFreqX += 1;
    modFreqX = p.max(modFreqX, 1);

    if (p.key === `9`) modFreqY -= 1;
    if (p.key === `0`) modFreqY += 1;
    modFreqY = p.max(modFreqY, 1);

    p.calculateLissajousPoints();
    // p.drawLissajous();

    // eslint-disable-next-line no-console
    console.log(`freqX: ${freqX}, freqY: ${freqY}, phi: ${phi}, modFreqX: ${modFreqX}, modFreqY: ${modFreqY}`);
  };
};

export default sketch;
