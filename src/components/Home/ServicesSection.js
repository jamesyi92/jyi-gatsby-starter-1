import React from 'react';
import styled from 'styled-components';

import {
	Container,
	Row,
	Col
} from 'reactstrap';

import Button from '../Button';

import Title from '../Title';
import Section from '../Section';
import CardA from '../CardA';

import services from '../../constants/services';


const ServicesSection = () => {

	return (
		<Section bg="#f6f6f6">
				<Container>
					<Row>
						<Col>
							<Title center title="Our Services" />
						</Col>
					</Row>
					<Row>

						{ services.map((item, index) => {
							return (
								<CardA 
									key={ index }
									icon={ item.icon } 
									title={ item.title } 
									desc={ item.desc } 
								/>
							)
						}) }

					</Row>
				</Container>
		</Section>
	)

}

export default ServicesSection;