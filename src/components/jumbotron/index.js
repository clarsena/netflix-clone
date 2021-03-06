import React from 'react';
import { Inner } from './styles/jumbotron';

export default function Jumbotron({ direction = 'row' }) {
	return (
		<Inner direction={direction}>
			<p>Hello again!</p>
		</Inner>
	);
}
