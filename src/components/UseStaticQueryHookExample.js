import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Example = () => {

	const data = useStaticQuery(graphql`
		query FirstQuery {
		  site {
		    siteMetadata {
		      title
		      description
		      author
		    }
		  }
		}
	`)

	// Example query arguements with filter

// 	{
//   allFile(filter: {relativeDirectory: {eq: "placeholder"}}) {
//     totalCount
//     edges {
//       node {
//         size
//         absolutePath
//         accessTime
//       }
//     }
//   }
// }


	const { site: { siteMetadata } } = data;

  return (
   	<div>
   		<h3>Title: { siteMetadata.title }</h3>
   		<h4>Description: { siteMetadata.description }</h4>
   		<h5>Author: { siteMetadata.author }</h5>
   	</div>
  );
};

export default Example;


