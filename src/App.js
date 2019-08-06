import React from 'react'
import P5Wrapper from 'react-p5-wrapper'
import testSketch from './testSketch'
import './App.css'

const App = () => {
  return (
    <P5Wrapper sketch={testSketch} rotation={45} />
  )
}

export default App
