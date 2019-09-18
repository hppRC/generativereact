import React from 'react';
import { createGlobalStyle } from 'styled-components';

export const GlobalTheme = createGlobalStyle`
	html, body{
		overflow: hidden;
	}
`;

export class Global extends React.Component {
	componentDidMount() {
		window.addEventListener(
			'touchmove',
			function(event) {
				event.preventDefault();
			},
			{
				passive: false
			}
		);
	}

	componentWillUnmount() {
		window.removeEventListener('touchmove', function(event) {
			event.preventDefault();
		});
	}

	render() {
		return <div>{this.props.children}</div>;
	}
}
