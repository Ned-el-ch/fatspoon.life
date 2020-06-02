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
import { loadRecipes } from '../Actions/recipes'
import { loadMealPlan } from '../Actions/mealPlan'
import PageHeader from '../Components/PageHeader'

const LoginPage = ({ userLoginFetch, loadIngredients, loadRecipes, loadMealPlan }) => {
	const [alert, setAlert] = useState(false);
	let history = useHistory();
	return (
		<div className="content">
		<div className="content--inner">
			<Row>
			<Col xs={12} sm={12} md={{ span: 10, offset: 1}} lg={{ span: 10, offset: 1}} className="rf-remove-margin">
				<PageHeader title="Login"/>
				<Form onSubmit={(event) => {
					event.preventDefault();
					const username = event.target.elements.username.value.toLocaleLowerCase();
					const password = event.target.elements.password.value;
					userLoginFetch(username, password).then(res => {
						if (!res.recipes) {
							setAlert(res);
						} else {
							history.push("/")
							loadIngredients(res.userIngredients)
							loadRecipes(res.recipes)
							loadMealPlan(res.recipeMeals)
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
		</div>
		</div>
	)
}

export default connect(null, { userLoginFetch, loadIngredients, loadRecipes, loadMealPlan })(LoginPage);