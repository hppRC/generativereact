import React, { Component } from 'react'
import P5Wrapper from 'react-p5-wrapper'
import testSketch from './testSketch'
import './App.css'

class App extends Component{

  constructor(props) {
    super(props)
    this.state = {
      rotation: 45,
    }
  }

	rotationChange(e){
		this.setState({rotation:e.target.value});
	}

	render () {
		return (
			<div>
				<P5Wrapper sketch={testSketch} rotation={this.state.rotation} />
				<input type="range" value={this.state.rotation}  min="0"  max="360" step="1" onInput={this.rotationChange.bind(this)}/>
			</div>
		)
	}
}


export default App
