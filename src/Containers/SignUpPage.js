import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { userSignUpFetch } from '../Actions/user'
import PageHeader from '../Components/PageHeader'

const SignUpPage = ({ userLoginFetch, user }) => {
	const [alert, setAlert] = useState(false);
	let history = useHistory();
	return (
		<Row>
		<Col xs={12} sm={12} md={{ span: 10, offset: 1}} lg={{ span: 10, offset: 1}} className="rf-remove-margin">
			<PageHeader title="Sign Up"/>
			<Form onSubmit={(event) => {
				event.preventDefault();
				const username = event.target.elements.username.value;
				const password = event.target.elements.password.value;
				userSignUpFetch({username, password}).then(res => {
					if (!res) {
						history.push("/")
					} else {
						setAlert(res)
					}
				});
			}}>
				<Form.Group controlId="username">
					<Form.Label>Username</Form.Label>
					<Form.Control type="username" placeholder="Enter Username"/>
				</Form.Group>
				<Form.Group controlId="password">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password"/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Sign Up
				</Button>
			</Form>
			{alert
			?
			<Alert variant="danger" onClose={() => setAlert(false)} dismissible>
				<Alert.Heading>Something went wrong, try again please!</Alert.Heading>
			</Alert>
			:
			null}
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

export default connect(mapStateToProps, { userSignUpFetch })(SignUpPage);