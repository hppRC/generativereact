const testSketch = (p) => {
    let rotation = 0

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL)
    }

    p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
        if (props.rotation){
            rotation = props.rotation * Math.PI / 180
        }
    }

    p.draw = () => {
        p.background(100)
        p.normalMaterial()
        p.noStroke()
        p.push()
        p.rotateY(rotation)
        p.box(100)
        p.pop()
    }
}

export default testSketch