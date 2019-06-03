import React from 'react';
import styled from 'styled-components';
import { Col } from 'reactstrap';

const StyledCardA = styled.div`

	& {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 45px;
		background: #ffffff;
		border-radius: 2px;
		margin-bottom: 15px;

		h3 {
			margin-bottom: 30px;
		}

		.cardA-icon {

			& {
				text-align: center;
			}

			svg {
				height: 60px;
				width: 60px;
				margin-bottom: 30px;
				fill: ${props => props.theme.primary};
			}
		}

	}


`

const CardA = ({ title, desc, icon }) => {

	return (
		<Col lg="4">
			<StyledCardA>
				<div className="cardA-icon">
					{ icon }
				</div>
				<div className="cardA-top">
					<h3>{ title }</h3>
				</div>
				<div className="cardA-body">
					<p>{ desc }</p>
				</div>
			</StyledCardA>
		</Col>
	)

}

export default CardA;