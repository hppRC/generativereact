const notFound = (p) => {

    let letters = []
    let density = 2
    let ribbonWidth = 62
    let pathSampleFactor = 0.1
    
    let textTyped = '404'
    
    let fontSize
    let shapeColor
    let font

    p.preload = () => {
        font = p.loadFont('../fonts/Anton-Regular.ttf')
    }

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight)
        p.noFill()
        p.strokeWeight(1)
        shapeColor = p.color(255)

        fontSize = p.windowWidth / 3.5

        p.createLetters()
    }

    p.draw = () => {
        p.background(0)

        p.translate(100, p.height * 0.75)

        pathSampleFactor = 0.1 * p.pow(0.02, p.mouseX / p.width)
        ribbonWidth = p.map(p.mouseY, 0, p.height, 1, 200)

        for (let i = 0; i < letters.length; i++) {
            letters[i].draw()
        }
    }

    p.createLetters = () => {
        letters = []
        const chars = textTyped.split('')

        let x = 0
        for (let i = 0; i < chars.length; i++) {
            if (i > 0) {
                const charsBefore = textTyped.substring(0, i)
                x = font.textBounds(charsBefore, 0, 0, fontSize).w
            }
            console.log(chars[i], x, 0)
            const newLetter = new Letter(chars[i], x, 0)

            letters.push(newLetter)
        }
    }

    class Letter {
        constructor (char, x, y) {
            this.char = char
            this.x = x
            this.y = y
        }

        draw = () => {
            const path = font.textToPoints(this.char, this.x, this.y, fontSize, {sampleFactor: pathSampleFactor})
            p.stroke(shapeColor)

            for (let d = 0; d < ribbonWidth; d += density) {
                p.beginShape()

                for (let i = 0; i < path.length; i++) {
                    const pos = path[i]
                    const nextPos = path[i + 1]

                    if (nextPos) {
                        const p0 = p.createVector(pos.x, pos.y)
                        const p1 = p.createVector(nextPos.x, nextPos.y)
                        const v = p1.sub(p0)
                        console.log(v)
                        v.normalize()
                        v.rotate(p.HALF_PI)
                        v.mult(d)
                        const pneu = p0.add(v)
                        p.curveVertex(pneu.x, pneu.y)
                    }
                }

                p.endShape(p.CLOSE)
            }
        }
    }

    p.keyReleased = () => {
        if (p.keycode === p.CONTROL) p.saveCanvas(p.gd.timestamp(), 'png')

        if (p.keycode === p.LEFT_ARROW) density *= 1.25
        if (p.keycode === p.RIGHT_ARROW) density /= 1.25

        if (p.keycode === p.UP_ARROW) {
            fontSize *= 1.1
            p.createLetters()
        }
        if (p.keycode === p.DOWN_ARROW) {
            fontSize /= 1.1
            p.createLetters()
        }

        if (p.keycode === p.ENTER) p.createLetters()
    }

    p.keyPressed = () => {
        if (p.keycode === p.DELETE || p.keycode === p.BACKSPACE) {
            if (textTyped.length > 0) {
                textTyped = textTyped.substring(0, textTyped.length - 1)
                p.createLetters()
            }
        }
    }

    p.keyTyped = () => {
        if (p.keycode >= 32) {
            textTyped += p.key
            p.createLetters()
        }
    }
}

export default notFound