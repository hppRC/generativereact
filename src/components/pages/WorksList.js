import React from 'react';
import { Link } from 'react-router-dom';
import P5Wrapper from 'react-p5-wrapper';
import worksListSketch from '../sketches/worksListSketch';
import WorksListTheme from 'components/themes/WorksListTheme';
import componentsList from '../../componentsList';

const WorksLink = props => (
	<li>
		<Link to={'/works/' + props.to}>{props.children}</Link>
	</li>
);

const Items = () => (
	<ul>
		{Object.keys(componentsList).map(id => (
			<WorksLink to={id}>work {id}</WorksLink>
		))}
	</ul>
);

const WorksList = () => (
	<WorksListTheme>
		<Items />
		<P5Wrapper sketch={worksListSketch} />
	</WorksListTheme>
);

export default WorksList;
