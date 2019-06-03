import React from 'react';
import styled from 'styled-components';


const StyledSection = styled.section`

	.section {
		padding: 90px 0;
		background-color: ${props => props.bg ? props.bg : '#ffffff'}
	}

`

const Section = ({ bg, children }) => {

	return(
		<StyledSection bg={ bg }>
			<div className="section">
				{ children }
			</div>
		</StyledSection>
	)

}

export default Section;

