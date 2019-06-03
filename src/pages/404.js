import React from 'react';

import Layout from '../layout/Layout';

import HeroA from '../components/HeroA';
import Banner from '../components/Banner';
import Button from '../components/Button';

const ErrorPage = () => {
	return (
		<Layout>
			<HeroA>
				<Banner
					dark 
					title="Oops!"
					desc="Sorry, your page could not be found." 
				>
					<Button 
						dark
						link="/"
					>
						Back to Home
					</Button>
				</Banner>
			</HeroA>
		</Layout>
	)
}

export default ErrorPage