import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledLink = styled(Link)`

	&& {
		border: 1px solid ${props => props.bg === 'dark' ? '#ffffff' : '#212121'};
		color: ${props => props.bg === 'dark' ? '#ffffff' : '#212121'};
		border-radius: 2px;
		padding: 10px 30px;
	}
	

`

const Button = ({ link, bg, children }) => {

	return (
		<StyledLink className="btn" to={ link } bg={ bg }>
			{ children }
		</StyledLink>
	)

}

export default Button;