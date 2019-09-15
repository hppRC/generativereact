import React from 'react';
import { Link } from 'react-router-dom';
import P5Wrapper from 'react-p5-wrapper';
import worksListSketch from '../sketches/worksListSketch';
import WorksListTheme from 'components/themes/WorksListTheme';

const WorksLink = props => (
	<li>
		<Link to={'/works/' + props.to}>{props.children}</Link>
	</li>
);

const WorksList = () => (
	<WorksListTheme>
		<div>
			<ul>
				<WorksLink to='1'>work 1</WorksLink>
				<WorksLink to='2'>work 2</WorksLink>
				<WorksLink to='3'>work 3</WorksLink>
			</ul>
			<P5Wrapper sketch={worksListSketch} />
		</div>
	</WorksListTheme>
);

export default WorksList;
