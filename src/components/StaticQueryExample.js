import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const getSiteData = graphql`
	query {
		site{
	    siteMetadata{
	      title
	      description
	      author
	    }
	  }
	}
`

const RegularHeader = () => {
    return (
      <StaticQuery 
      	query={ getSiteData }
      	render={
      		(data) => {
      			const { site: { siteMetadata } } = data;
      			return (
      				<div>
      					<h1>Title: { siteMetadata.title }</h1>
      					<h1>Description: { siteMetadata.description }</h1>
      					<h1>Author: { siteMetadata.author }</h1>
      				</div>
      			)
      		}
      	}
      />
    );
};

export default RegularHeader;
