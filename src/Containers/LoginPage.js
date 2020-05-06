import React from 'react'
import Form from 'react-bootstrap/Form'
const LoginPage = () => {
	return (
		<Form>
			<Form.Group controlId="formUsername">
				<Form.Label>Username</Form.Label>
				<Form.Control type="username" placeholder="Enter Username"/>
				<Form.Text className="text-muted">
					This is what you'll be referred to
				</Form.Text>
			</Form.Group>

			<Form.Group controlId="formPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Password"/>
			</Form.Group>
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	)
}

export default LoginPage;