import React from 'react';
import Title from '../Title';
import styled from 'styled-components';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const StyledInput = styled(Input)`
	&& {
		padding: 30px;
		border-radius: 2px;
		box-shadow: none;
		outline: none;
		
		&:focus,
		&:active {
			outline: none;
			box-shadow: none;
		}

	}
`

const StyledSubmitButton = styled(Button)`
	&& { 
		display: block;
		width: 100%;
		padding: 15px 30px;
		background: ${props => props.theme.primary};
		border: none;
	}
`

const ContactForm = () => {
    return (
    	<React.Fragment>
    		<Title title="Tell Us What You Think"/>
    		<Form action="https://formspree.io/jamesyi@live.com">
	        <Row form>
	        	<Col md={6}>
	        		<FormGroup>
	        		  <StyledInput type="text" name="firstName" id="firstName" placeholder="First Name" />
	        		</FormGroup>
	        	</Col>
	        	<Col md={6}>
	        		<FormGroup>
	        		  <StyledInput type="text" name="lastName" id="lastName" placeholder="Last Name" />
	        		</FormGroup>
	        	</Col>
	        	<Col md={12}>
	        		<FormGroup>
	        		  <StyledInput type="email" name="email" id="email" placeholder="Email" />
	        		</FormGroup>
	        	</Col>
	        	<Col md={12}>
	        		<FormGroup>
	        		  <StyledInput type="textarea" name="message" id="message" placeholder="Message" />
	        		</FormGroup>
	        	</Col>
	        	<Col md={12}>
	        		<FormGroup>
	        		  <StyledSubmitButton type="submit" className="btn">Submit</StyledSubmitButton>
	        		</FormGroup>
	        	</Col>
	        </Row>
	       </Form>
    	</React.Fragment>
    );
};


export default ContactForm;
