import styled from 'styled-components'
import media from "styled-media-query"


const TopTheme = styled.div`
    text-align: right;
    .title {
        display: block;
        position: absolute;
        top: 60vh;
        left: 60vw;

        color: #fff;
        font-family: 'Raleway', sans-serif;
        
        h1 {
            font-size: 5rem;
        }
        p {
            font-size: 2rem;
        }
        ${media.lessThan("medium")`
            top: 50vh;
            left: 50vw;

            h1 {
                font-size: 2rem;
            }
            p {
                font-size: 1rem;
            }
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