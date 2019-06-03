import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h2`

	text-align: ${props => props.center ? 'center' : 'left' };
	margin-bottom: 60px;

`

const Title = ( props ) => {

	return (
		<StyledTitle {...props}>
			{ props.title }
		</StyledTitle>
	)

}

export default Title;