import React from 'react';
import styled from 'styled-components';

import {
	Container,
	Row,
	Col
} from 'reactstrap';

const StyledHeroA = styled.header`

	height: 800px;
	background: ${props => props.theme.primary};
	display: flex;
	align-items: center;
	//clip-path: polygon(0 0, 80% 0, 58% 100%, 0% 100%);

`

const HeroA = ({ children }) => {

	return (
		<StyledHeroA>
			<Container>
				<Row>
					<Col md="6">
						{ children }
					</Col>
				</Row>
			</Container>
		</StyledHeroA>
	)

}

export default HeroA;