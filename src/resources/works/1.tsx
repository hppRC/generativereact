/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const sketch = (p: any): void => {
  let x: number;
  let y: number;

  let count: number;
  let row: number;
  let col: number;
  let times = 0;

  const colors = [`#6699CCc1`, `#FFF275c1`, `#FF8C42c1`, `#FF3C38c1`, `#A23E48c1`];

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB, 360, 100, 100, 100);
    p.angleMode(p.DEGREES);
    p.background(`#09090f`);
    count = p.int(p.random(1, 15));
    col = count;
    row = p.height / (p.width / col);
    for (let j = 0; j < row; j += 1) {
      for (let i = 0; i < col; i += 1) {
        x = (i * p.width) / col;
        y = (j * p.height) / row;

        const d = p.width / col;
        const h = d / 2;
        const angle = p.int(p.random(4)) * 90;

        p.push();
        p.translate(x + h, y + h);
        p.rotate(angle);

        const color = p.random(colors);

        const shape = p.int(p.random(4));

        switch (shape) {
          case 0:
            p.fill(color);
            p.noStroke();
            p.rect(-h, -h, d, d);
            break;
          case 1:
            p.fill(color);
            p.noStroke();
            p.triangle(-h, -h, -h, 0, 0, -h);
            p.triangle(0, 0, h, 0, 0, h);
            break;
          case 2:
            p.noFill();
            p.stroke(color);
            p.ellipse(0, 0, d, d);
            p.ellipse(p.random(-1, 1) * h, p.random(-1, 1) * h, d / 2, d / 2);
            p.ellipse(p.random(-1, 1) * h, p.random(-1, 1) * h, d / 3, d / 3);
            p.ellipse(p.random(-1, 1) * h, p.random(-1, 1) * h, d / 4, d / 4);
            p.ellipse(p.random(-1, 1) * h, p.random(-1, 1) * h, d / 5, d / 5);
            break;
          case 3:
            p.fill(color);
            p.noStroke();
            p.ellipse(0, 0, d, d);
            p.ellipse(p.random(-1, 1) * h, p.random(-1, 1) * h, h, h);
            break;
          default:
            break;
        }
        p.pop();
      }
    }
  };

  p.draw = () => {
    p.background(`#12121204`);
    times += 1;
    if (times > 140) {
      times = 0;
      p.setup();
    }
  };
};

export default sketch;
