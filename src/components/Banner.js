import React from 'react';
import styled from 'styled-components';

import {
	Container,
	Row,
	Col
} from 'reactstrap';

const StyledBanner = styled.div`

	h1, p {
		color: ${props => props.bg === 'dark' ? '#ffffff' : '#212121'}
	}

	p {
		margin-bottom: 30px;
	}

`

const Banner = ({ title, desc, bg, children }) => {

	return (
		<StyledBanner bg={ bg }>
			<Row>
				<Col>
					<h1>{ title }</h1>
					<p>{ desc }</p>
					{ children }
				</Col>
			</Row>
		</StyledBanner>
	)

}

export default Banner;