import p5 from 'p5';

export const sketch = (p: any) => {
  let shape: any;

  let joints = 10;
  let linelength: number;
  let resolution = 0.9993;
  let gravity = 5;
  let damping = 0.99994;

  //let cnt = 0;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    linelength = p.windowWidth / 20;
    p.colorMode(p.HSB, 360, 100, 100, 100);
    p.angleMode(p.DEGREES);
    p.noFill();
    p.strokeWeight(1);
    shape = new Shape();
    p.background(0);
  };

  p.draw = () => {
    p.background(0, 10);
    shape.addPos(p.mouseX, p.mouseY);
    shape.draw();
    shape.update();

    //cnt = (cnt + 0.3) % 360;
  };

  class Shape {
    private shapePath: any;
    private pendulumPath: any;
    private iterator: number;
    private linelength: number;
    private resolution: number;
    private pendulum: any;
    constructor() {
      this.shapePath = [];
      this.pendulumPath = [];
      this.iterator = 0;
      this.linelength = linelength;
      this.resolution = resolution;
      this.pendulum = new Pendulum(this.linelength, joints);
    }

    addPos(x: number, y: number) {
      if (x === 0 && y === 0) {
        return;
      }
      const newPos = p.createVector(x, y);
      this.shapePath.push(newPos);
    }

    draw() {
      p.strokeWeight(0.4);
      if (this.iterator < this.shapePath.length) {
        const currentIndex = p.floor(this.iterator);

        const currentPos = this.shapePath[currentIndex];
        const previousPos = this.shapePath[currentIndex - 1];
        if (previousPos) {
          const offsetPos: any = p5.Vector.lerp(
            previousPos,
            currentPos,
            this.iterator - currentIndex
          );
          const heading =
            p.atan2(
              currentPos.y - previousPos.y,
              currentPos.x - previousPos.x
            ) - p.HALF_PI;

          p.push();
          p.translate(offsetPos.x, offsetPos.y);
          this.pendulum.update(heading);
          this.pendulum.draw();
          p.pop();

          this.pendulumPath.push(this.pendulum.getTrail(offsetPos));
        }
      }
    }

    update() {
      this.iterator += this.resolution;
      this.iterator = p.constrain(this.iterator, 0, this.shapePath.length);
    }
  }

  class Pendulum {
    private hierarchy: number;
    private size: number;
    private pendulumArm: any;
    private angle: number;
    private origin: any;
    private end: any;
    private gravity: number;
    private damping: number;
    private angularAcceleration: number;
    private angularVelocity: number;
    constructor(size: number, hierarchy: number) {
      this.hierarchy = hierarchy - 1;
      this.size = size;
      this.pendulumArm =
        this.hierarchy > 0 ? new Pendulum(this.size / 2, this.hierarchy) : null;
      this.angle = p.random(p.TAU);
      this.origin = p.createVector(0, 0);
      this.end = p.createVector(0, 0);
      this.gravity = gravity;
      this.damping = damping;
      this.angularAcceleration = 0;
      this.angularVelocity = 0;
    }

    update(heading: any) {
      this.end.set(
        this.origin.x + this.size * p.sin(this.angle),
        this.origin.y + this.size * p.cos(this.angle)
      );

      this.angularAcceleration =
        (-this.gravity / this.size) * p.sin(this.angle + heading);
      this.angle += this.angularVelocity;
      this.angularVelocity += this.angularAcceleration;
      this.angularVelocity *= this.damping;

      if (this.pendulumArm) {
        this.pendulumArm.update(heading);
      }
    }

    getTrail(offset: number, end: any) {
      if (this.pendulumArm) {
        if (end) {
          end.add(this.end);
        } else {
          end = this.end.copy();
        }
        return this.pendulumArm.getTrail(offset, end);
      } else {
        return this.end
          .copy()
          .add(end)
          .add(offset);
      }
    }

    draw() {
      p.noFill();
      p.stroke(255, 90);
      p.ellipse(this.origin.x, this.origin.y, this.end.x + this.end.y);

      if (this.pendulumArm) {
        p.push();
        p.translate(this.end.x, this.end.y);
        this.pendulumArm.draw();
        p.pop();
      }
    }
  }
};

export default sketch;
