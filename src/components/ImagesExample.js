import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import img from '../images/picture1.jpg';
import Img from 'gatsby-image';


const StyledImageCard = styled.div`

	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
	border-radius: 2px;
	padding: 30px;

	.fixed-image {
		max-width: 100%;
		height: auto;
	}

`

const ImagesExample = () => {

	const data = useStaticQuery(graphql`
		query ImagesQuery {
		  fixed: file(relativePath: {eq: "picture1.jpg"}) {
		    childImageSharp {
		      fixed(width: 200, grayscale: true) {
		        ...GatsbyImageSharpFixed
		      }
		    }
		  }
		  fluid: file(relativePath: {eq: "picture2.jpg"}) {
		    childImageSharp {
		      fluid(maxWidth: 100) {
		        ...GatsbyImageSharpFluid
		      }
		    }
		  }
		}
	`)

  return (
    <React.Fragment>
    	<div className="container">
    		<div className="row">
    			<div className="col-md-4">
    				<StyledImageCard>
    					<h3>Basic Image</h3>
    					<img src={ img } />
    				</StyledImageCard>
    			</div>
    			<div className="col-md-4">
    				<StyledImageCard>
    					<h3>Fixed Image (Blur)</h3>
    					<Img className="fixed-image" fixed={ data.fixed.childImageSharp.fixed } />
    				</StyledImageCard>
    			</div>
    			<div className="col-md-4">
    				<StyledImageCard>
    					<h3>Fluid Image (SVG Trace)</h3>
    					<Img className="fluid-image" fluid={ data.fluid.childImageSharp.fluid } />
    				</StyledImageCard>
    			</div>
    		</div>
    	</div>
    </React.Fragment>
  );
};

export default ImagesExample;
