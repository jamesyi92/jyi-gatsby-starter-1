import React from 'react';
import styled from 'styled-components';

import {
	Container,
	Row,
	Col
} from 'reactstrap';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Button from '../Button';
import Title from '../Title';
import Section from '../Section';

import intro from '../../constants/intro';


const IntroSection = () => {

	const { introImage } = useStaticQuery(graphql`
		query IntroImageQuery {
		  introImage:file(relativePath: {eq: "intropic.jpg"}) {
		    childImageSharp {
		      fluid {
		        ...GatsbyImageSharpFluid
		      }
		    }
		  }
		}
	`)

	console.log(data);

	return (
		<Section>
				<Container>

					<Row>
						<Col>
							<Title center title="Headline Intro" />
						</Col>
					</Row>

					<Row className="justify-content-center mb-5">
						<Col md="8">
							<Img fluid={ data.file.childImageSharp.fluid } />
						</Col>
					</Row>

					<Row className="mb-4">


						{ intro.map((item, index) => {

							return(
								<Col md="4" key={ index }>
									<h3>{ item.title }</h3>
									<p>{ item.desc }</p>
								</Col>
							)

						}) }


					</Row>

					<Row>
						<Col className="text-center">
							<Button 
								link="/tours"
							>
								Read More
							</Button>
						</Col>	
					</Row>

				</Container>
		</Section>
	)

}

export default IntroSection;