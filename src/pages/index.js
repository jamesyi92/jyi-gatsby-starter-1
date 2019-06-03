import React from 'react';
import { Link } from 'gatsby';

import HeroA from '../components/HeroA';
import Banner from '../components/Banner';
import Button from '../components/Button';

import IntroSection from '../components/Home/IntroSection';
import ServicesSection from '../components/Home/ServicesSection';

import Layout from '../layout/Layout';

export default () => (
		<Layout>
			<HeroA>
				<Banner
					bg="dark" 
					title="Find Your Dream Destination"
					desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora iusto, soluta illum quibusdam ipsum exercitationem, ipsam distinctio in doloribus libero placeat velit deleniti accusamus quos aliquid." 
				>
					<Button 
						bg="dark" 
						link="/tours"
					>
						Explore
					</Button>
				</Banner>
			</HeroA>
			<IntroSection />
			<ServicesSection />
		</Layout>
	)