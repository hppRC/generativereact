/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-use-before-define */
export const sketch = (p: any): void => {
  const agents: any = [];
  const agentCount = 3000;
  const noiseScale = 100;
  const noiseStrength = 10;
  const noiseZRange = 0.5;
  const noiseZVelocity = 0.01;
  const agentAlpha = 90;
  const strokeWidth = 1;
  let count = 0;

  class Agent {
    private vector: any;

    private vectorOld: any;

    private stepSize: number;

    private angle: number;

    private noiseZ: number;

    constructor(localNoiseZRange: number) {
      this.vector = p.createVector(p.random(p.width), p.random(p.height));
      this.vectorOld = this.vector.copy();
      this.stepSize = p.random(1, 5);
      this.angle = 0;
      this.noiseZ = p.random(localNoiseZRange);
    }

    update = (localStrokeWidth: number, localNoiseZVelocity: number) => {
      this.vector.x += p.cos(this.angle) * this.stepSize;
      this.vector.y += p.sin(this.angle) * this.stepSize;

      if (this.vector.x < -10) {
        this.vectorOld.x = p.width + 10;
        this.vector.x = this.vectorOld.x;
      }
      if (this.vector.x > p.width + 10) {
        this.vectorOld.x = -10;
        this.vector.x = this.vectorOld.x;
      }
      if (this.vector.y < -10) {
        this.vectorOld.y = p.height + 10;
        this.vector.y = this.vectorOld.y;
      }
      if (this.vector.y > p.height + 10) {
        this.vectorOld.y = -10;
        this.vector.y = this.vectorOld.y;
      }

      p.strokeWeight(localStrokeWidth * this.stepSize);
      p.line(this.vectorOld.x, this.vectorOld.y, this.vector.x, this.vector.y);
      this.vectorOld = this.vector.copy();
      this.noiseZ += localNoiseZVelocity;
    };

    update1 = (
      localStrokeWidth: number,
      localNoiseScale: number,
      localNoiseStrength: number,
      localNoiseZVelocity: number
    ) => {
      this.angle =
        p.noise(this.vector.x / localNoiseScale, this.vector.y / localNoiseScale, this.noiseZ) * localNoiseStrength;
      this.update(localStrokeWidth, localNoiseZVelocity);
    };
  }

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    for (let i = 0; i < agentCount; i += 1) {
      agents[i] = new Agent(noiseZRange);
    }
  };

  p.draw = () => {
    p.background(`#09090f`);

    p.stroke(255, agentAlpha);
    for (let i = 0; i < agentCount; i += 1) {
      agents[i].update1(strokeWidth, noiseScale, noiseStrength, noiseZVelocity);
    }
    count += 1;
    if (count >= 300) {
      count = 0;
      const newNoiseSeed = p.floor(p.random(10000));
      p.noiseSeed(newNoiseSeed);
    }
  };

  p.keyReleased = () => {
    if (p.key === `s` || p.key === `S`) p.saveCanvas(p.gd.timestamp(), `png`);
    if (p.key === ` `) {
      const newNoiseSeed = p.floor(p.random(10000));
      p.noiseSeed(newNoiseSeed);
    }
    if (p.keyCode === p.DELETE || p.keyCode === p.BACKSPACE) p.background(0);
  };
};

export default sketch;
