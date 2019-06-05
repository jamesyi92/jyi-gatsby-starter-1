import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

const StyledBackgroundImage = styled(BackgroundImage)`
	min-height: ${props => props.home ? '80vh' : '500px'};
	background: ${props => props.home ? 'rgba(0,0,0, .5)' : 'none'};
	background-position: center;
	background-size: cover;
	opacity: 1!important;
	display: flex;
	align-items: center;
	justify-content: center;
`

const StyledHero = ({ img, children, home }) => {



  return (
  	<StyledBackgroundImage
  		fluid={ img }
  		home={ home }
  	>
  		<div className="container">
  			<div className="row">
  				<div className="col">
  					{ children }
  				</div>
  			</div>
  		</div>
  	</StyledBackgroundImage>
  );
};

export default StyledHero;
