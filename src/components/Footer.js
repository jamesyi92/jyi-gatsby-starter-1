import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'reactstrap';
import styled from 'styled-components';
import links from '../constants/links';


const StyledFooter = styled.footer`

	padding: 30px 0;
	
`

const StyledFooterIntro = styled.div`

`

const StyledInnerFooterWrap = styled.div`

	display: flex;
	align-items: center;
	justify-content: space-between;

`

const Footer = () => {
	return (
		<StyledFooter>
			<Container>
				<StyledInnerFooterWrap>

					<StyledFooterIntro>
						&copy; { new Date().getFullYear() } Made with GatsbyJS
					</StyledFooterIntro>

				</StyledInnerFooterWrap>
			</Container>
		</StyledFooter>
	)
}


export default Footer;