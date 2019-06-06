import React, { Component } from 'react';

import { graphql } from 'gatsby';
import Layout from '../layout/Layout';

import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';


export default class ToursPage extends Component {
	render() {
		return (
			<Layout>
				<StyledHero
					img={ this.props.data.bgImg.childImageSharp.fluid }
				>
					<Banner
						bg="dark" 
						title="Tours"
						desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora iusto, soluta illum quibusdam ipsum exercitationem, ipsam distinctio in doloribus libero placeat velit deleniti accusamus quos aliquid." 
					/>
				</StyledHero>
			</Layout>
		);
	}
}

export const query = graphql`
	query {
	  bgImg: file(relativePath: {eq: "picture2.jpg"}) {
	    childImageSharp {
	      fluid {
	        ...GatsbyImageSharpFluid
	      }
	    }
	  }
	}
`;