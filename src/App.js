import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'
import { Reset } from 'styled-reset'
import TopPage from './components/pages/TopPage'
import Works from './Works'

const App = () => (
	<Router>
		<Reset />
		<Switch>
			<Route exact path='/' component={TopPage}/>
			<Route path='/:id' component={Works} />
		</Switch>
	</Router>
)


export default App
