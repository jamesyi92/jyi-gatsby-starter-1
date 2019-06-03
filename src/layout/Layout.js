import React from 'react';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import { ThemeProvider } from 'styled-components';
import theme from '../utils/theme';

import '../scss/main.scss';

const Layout = (props) => {
	return (
		<ThemeProvider theme={ theme }>
			<React.Fragment>
				<Navigation />
					<main>
						{ props.children }
					</main>
				<Footer />
			</React.Fragment>
		</ThemeProvider>
	)
}


export default Layout;