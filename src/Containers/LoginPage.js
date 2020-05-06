import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { userLoginFetch } from '../Actions/user'
import { connect } from 'react-redux'

const LoginPage = ({ userLoginFetch }) => {
	return (
		<Row>
		<Col xs={12} sm={12} md={{ span: 10, offset: 1}} lg={{ span: 10, offset: 1}} className="rf-remove-margin">
			<Form onSubmit={(event) => {
				event.preventDefault();
				const username = event.target.elements.username.value;
				const password = event.target.elements.password.value;
				userLoginFetch({username, password});
			}}>
				<Form.Group controlId="username">
					<Form.Label>Username</Form.Label>
					<Form.Control type="username" placeholder="Enter Username"/>
					<Form.Text className="text-muted">
						This is what you'll be referred to
					</Form.Text>
				</Form.Group>

				<Form.Group controlId="password">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password"/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</Col>
		</Row>
	)
}

const mapStateToProps = state => {
	return (
		{
			user: state.user
		}
	)
}

export default connect(mapStateToProps, { userLoginFetch })(LoginPage);