import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { userLoginFetch } from '../Actions/user'
import { loadIngredients } from '../Actions/ingredients'
import PageHeader from '../Components/PageHeader'

const LoginPage = ({ userLoginFetch, loadIngredients }) => {
	const [alert, setAlert] = useState(false);
	let history = useHistory();
	return (
		<Row>
		<Col xs={12} sm={12} md={{ span: 10, offset: 1}} lg={{ span: 10, offset: 1}} className="rf-remove-margin">
			<PageHeader title="Login"/>
			<Form onSubmit={(event) => {
				event.preventDefault();
				const username = event.target.elements.username.value.toLocaleLowerCase();
				const password = event.target.elements.password.value;
				userLoginFetch({username, password}).then(res => {
					if (res.length === undefined) {
						setAlert(res);
					} else {
						history.push("/")
						loadIngredients(res)
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
					Login
				</Button>
			</Form>
			{alert
			?
			<Alert variant="danger" onClose={() => setAlert(false)} dismissible>
				<Alert.Heading>Oh snap! Wrong deets!</Alert.Heading>
			</Alert>
			:
			null}
		</Col>
		</Row>
	)
}

export default connect(null, { userLoginFetch, loadIngredients })(LoginPage);