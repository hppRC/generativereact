import React from 'react';
import { Link } from 'react-router-dom';
import P5Wrapper from 'react-p5-wrapper';
import topSketch from '../sketches/topSketch';
import TopTheme from '../themes/TopTheme';

const TopPage = () => (
	<TopTheme>
		<div>
			<style>
				@import
				url('https://fonts.googleapis.com/css?family=Lexend+Giga|Patua+One|Raleway|Saira+Stencil+One&display=swap');
			</style>
			<Link to='/works'>
				<div className='title'>
					<h1>
						Genarative
						<br />
						React
					</h1>
					<p>click here</p>
				</div>
			</Link>
		</div>
		<P5Wrapper sketch={topSketch} />
	</TopTheme>
);

export default TopPage;
