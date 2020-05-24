/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const sketch = (p: any): void => {
  let cols: number;
  let rows: number; // １行, 1列あたりのタイル数を格納
  const scl = 15; // タイルのサイズを指定
  let terrain: number[][]; // タイルの情報を格納する2次元配列

  let xoff;
  let yoff;

  let flying = 0;

  p.setup = () => {
    p.createCanvas(p.min(p.windowWidth, 750), p.min(p.windowHeight, 750), p.WEBGL); // レンダーにWEBGLを指定
    cols = Math.max(Math.ceil(p.width / scl), 30); // ウインドウ幅/タイルの大きさが１行に存在するタイル数
    rows = Math.max(Math.ceil(p.height / scl), 30); // ウインドウの高さ/タイルの大きさが1列に存在するタイル数
    // 1次元目: 列数, 2次元目: 行数の配列を作成
    terrain = new Array(cols).fill(0);
    for (let i = 0; i < cols; i += 1) {
      terrain[i] = new Array(rows).fill(0);
    }
  };

  p.draw = () => {
    flying -= 0.1;

    xoff = flying;
    for (let x = 0; x < cols; x += 1) {
      yoff = 0;
      for (let y = 0; y < rows; y += 1) {
        terrain[x][y] = p.map(p.noise(xoff, yoff), 0, 1, -150, 200);
        xoff += 0.1;
      }
      yoff += 0.1;
    }

    p.background(p.color(`#09090f`));
    p.stroke(155);
    p.noFill();

    p.rotateX(p.PI / 2.6);
    p.translate(-(scl * cols) / 2, -(scl * rows) / 2 + 7 * scl);

    for (let y = 0; y < rows - 1; y += 1) {
      p.beginShape(p.TRIANGLE_STRIP);
      for (let x = 0; x < cols; x += 1) {
        p.vertex(x * scl, y * scl, terrain[x][y]);
        p.vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
      }
      p.endShape();
    }
  };
};

export default sketch;
