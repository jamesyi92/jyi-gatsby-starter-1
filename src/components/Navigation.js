import React, { Component } from 'react';
import { Link } from 'gatsby';
import { IoIosMenu } from 'react-icons/io';
import links from '../constants/links';
import socialIcons from '../constants/social-icons';

import styled from 'styled-components';
import {
	Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';


const StyledNavbar = styled(Navbar)`

	li {
		margin-bottom: 0;
		text-transform: capitalize;
	}

`

const StyledNavToggler = styled(IoIosMenu)`

	display: none;
	height: 30px;
	width: 30px;

`

const StyledSocialIcons = styled.div`

	display:flex;
	align-items:center;

	a:not(:last-child) {
		margin-right: 15px;
	}

	svg {
		height: 20px;
		width: 20px;
    fill: ${props => props.theme.primary}
	}

`

class Navigation extends Component {
	
	state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {

    return (

        <StyledNavbar light expand="md">
          <Container>
          	<Link className="navbar-brand" to="/">Boilerplate Logo</Link>
          	<StyledNavToggler className="d-block d-md-none" onClick={this.toggle} />
          	<Collapse isOpen={this.state.isOpen} navbar>
          	  <Nav className="ml-auto" navbar>

          	  	{
          	  		links.map((item, index) => {
          	  			return (
	          	    		<NavItem key={ index }>
	          	    			<Link className="nav-link" to={ item.path }>{ item.text }</Link>
	          	    		</NavItem>
	          	    	)
          	  		})
          	  	}

          	  	<StyledSocialIcons className="ml-0 ml-md-4">
          	  		{
          	  			socialIcons.map((item, index) => {
          	  				return (
		          	    		<a key={ index } rel="noopener noreferrer" href={ item.url } target="_blank">{ item.text }
		          	    			{ item.icon }
		          	    		</a>
		          	    	)
          	  			})
          	  		}
          	  	</StyledSocialIcons>
          	  
          	  </Nav>
          	</Collapse>
          </Container>
        </StyledNavbar>

    );

  }

}

export default Navigation;