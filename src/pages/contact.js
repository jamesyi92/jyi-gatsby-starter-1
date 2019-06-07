import React from 'react';

import { graphql } from 'gatsby';
import Layout from '../layout/Layout';

import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import ContactForm from '../components/Contact/ContactForm';
import { Row, Container, Col } from 'reactstrap';
import Section from '../components/Section'

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
				<Section>
					<Container>
						<Row className="justify-content-center">
							<Col md={8}>
								<ContactForm />
							</Col>
						</Row>
					</Container>
				</Section>
		</Layout>
	)
}

export default ContactPage

export const query = graphql`
query {
  bgImg: file(relativePath: {eq: "picture1.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`