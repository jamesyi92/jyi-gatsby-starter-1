import React from 'react';

import { graphql } from 'gatsby';
import Layout from '../layout/Layout';

import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';

const ContactPage = ({ data }) => {
	return (
		<Layout>
			<StyledHero
					img={ data.bgImg.childImageSharp.fluid }
				>
					<Banner
						bg="dark" 
						title="Contact Us"
						desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora iusto, soluta illum quibusdam ipsum exercitationem, ipsam distinctio in doloribus libero placeat velit deleniti accusamus quos aliquid." 
					/>
				</StyledHero>
		</Layout>
	)
}

export default ContactPage

export const query = graphql`
query {
  bgImg: file(relativePath: {eq: "picture1.jpg"}) {
    childImageSharp {
      fluid {
        src
      }
    }
  }
}
`