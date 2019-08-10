import React from 'react'
import P5Wrapper from 'react-p5-wrapper'
import topSketch from './topSketch'
import TopTheme from './TopTheme'


const TopPage = () => (
    <TopTheme>
        <div>
        <style>
@import url('https://fonts.googleapis.com/css?family=Lexend+Giga|Patua+One|Raleway|Saira+Stencil+One&display=swap');
</style>
            <h1>Genarative<br />React</h1>
        </div>
        <P5Wrapper sketch={topSketch} />
    </TopTheme>
)

export default TopPage
