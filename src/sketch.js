const sketch = (p) => {
    let direction;

    const [NORTH, NORTHEAST, EAST, SOUTHEAST, SOUTH, SOUTHWEST, WEST, NORTHWEST] = [0, 1, 2, 3, 4, 5, 6, 7]

    let stepSize = 3
    let diameter = 1

    let posX
    let posY

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight)
        p.noStroke()
        p.fill(p.color(255,255,255))
        posX = p.width / 2
        posY = p.height / 2
    }

    p.draw = () => {
        for (let i = 0; i <= p.mouseX; i++) {
          direction = p.int(p.random(0, 8))

          if (direction === NORTH) {
            posY -= stepSize
          } else if (direction === NORTHEAST) {
            posX += stepSize
            posY -= stepSize
          } else if (direction === EAST) {
            posX += stepSize
          } else if (direction === SOUTHEAST) {
            posX += stepSize
            posY += stepSize
          } else if (direction === SOUTH) {
            posY += stepSize
          } else if (direction === SOUTHWEST) {
            posX -= stepSize
            posY += stepSize
          } else if (direction === WEST) {
            posX -= stepSize
          } else if (direction === NORTHWEST) {
            posX -= stepSize
            posY -= stepSize
          }

          if (posX > p.width) posX = 0
          if (posX < 0) posX = p.width
          if (posY < 0) posY = p.height
          if (posY > p.height) posY = 0

          p.ellipse(posX + stepSize, posY + stepSize, diameter, diameter)
        }
      }

    p.keyReleased = () => {
        console.log(p.key)
        if (p.key === 's' || p.key === 'S') {
            p.saveCanvas(p.gd.timestamp(), 'png')
        }
        if (p.keyCode === p.DELETE || p.keyCode === p.BACKSPACE) {
            p.clear()
        }
    }
}

export default sketch
