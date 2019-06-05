import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout/Layout';

const BlogPage = (props) => {
	
	const { site: { siteMetadata } } = props.data;

	return (
		<Layout>
			<div>
	   		<h3>Title: { siteMetadata.title }</h3>
	   		<h4>Description: { siteMetadata.description }</h4>
	   		<h5>Author: { siteMetadata.author }</h5>
	   	</div>
		</Layout>
	)
}

export const query = graphql`
	query {
	  site {
	    siteMetadata {
	      title
	      description
	      author
	    }
	  }
	}
`

export default BlogPage