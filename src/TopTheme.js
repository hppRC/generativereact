import styled from 'styled-components'
import media from "styled-media-query";


const TopTheme = styled.div`
    text-align: right;
    h1 {
        display:block;
        position: absolute;
        top: 60vh;
        left: 60vw;
        color: #fff;
        font-size: 5rem;
        font-family: 'Raleway', sans-serif;

        ${media.lessThan("medium")`
            top: 50vh;
            left: 50vw;
            font-size: 2rem;
        `}
    }

    canvas {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
`

export default TopTheme