import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Reset } from 'styled-reset';
import TopPage from './components/pages/TopPage';
import WorksList from './components/pages/WorksList';
import NotFound from './components/pages/NotFound';
import Works from './Works';
import { Global, GlobalTheme } from './Global';

const App = () => (
	<Router>
		<Reset />
		<GlobalTheme />
		<Global>
			<Switch>
				<Route exact path='/' component={TopPage} />
				<Route exact path='/works' component={WorksList} />
				<Route exact path='/works/:id' component={Works} />
				<Route path='/' component={NotFound} />
			</Switch>
		</Global>
	</Router>
);

export default App;
