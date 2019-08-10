import React from 'react'
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'
import { Reset } from 'styled-reset'
import TopPage from './components/TopPage'

const App = () => (
	<Router>
		<Reset />
		<Route path='/' component={TopPage}/>
	</Router>
)


export default App
