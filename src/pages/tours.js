import React, { Component } from 'react';

import Layout from '../layout/Layout';

import Example from '../components/StaticQueryExample';

export default class ToursPage extends Component {
	render() {
		return (
			<Layout>
				Hello from tours page
				<Example />
			</Layout>
		);
	}
}
