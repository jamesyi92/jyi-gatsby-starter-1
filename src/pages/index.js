import React from 'react';
import { Link, graphql } from 'gatsby';

// import HeroA from '../components/HeroA';

import StyledHero from '../components/StyledHero';

import Banner from '../components/Banner';
import Button from '../components/Button';

import IntroSection from '../components/Home/IntroSection';
import ServicesSection from '../components/Home/ServicesSection';

import Layout from '../layout/Layout';

export default ({ data }) => (
		<Layout>
			<StyledHero
				home="true"
				img={ data.defaultBg.childImageSharp.fluid }
			>
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
			</StyledHero>
			<IntroSection />
			<ServicesSection />
		</Layout>
	)

export const query = graphql`
	query {
	  defaultBg:file(relativePath: {eq: "picture3.jpg"}) {
	    childImageSharp {
	      fluid(quality: 90, maxWidth: 4160) {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  }
	}
`;