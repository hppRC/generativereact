import React from 'react'
import topSketch from './topSketch'
import P5Wrapper from 'react-p5-wrapper'
import TopTheme from './TopTheme'


const TopPage = () => (
    <TopTheme>
        <P5Wrapper sketch={topSketch} />
    </TopTheme>
)

export default TopPage
