import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Fridge from './Fridge.js';
import Cookbook from './Cookbook.js';
import MealPlannerContainer from './MealPlannerContainer.js';
// import SearchResults from './SearchResults.js';
import NavbarContainer from './NavbarContainer.js';

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ShoppingListContainer from './ShoppingListContainer.js';
import RecipePage from './RecipePage.js';
import LoginPage from './LoginPage.js';
import SignUpPage from './SignUpPage.js';
import { connect } from 'react-redux';
import { getProfileFetch } from '../Actions/user'

const App = ({ getProfileFetch }) => {
	useEffect(() => {getProfileFetch()}, [])
	return (
		<div className="app-container">
			<Router>
				<NavbarContainer />
				<Container fluid>
					<Row className="align-self-start justify-content-center">
					<Col xs sm md lg={10} xl={8} className="col-xxl">
						<Switch>
							<Route exact path="/" component={MealPlannerContainer} />
							<Route exact path="/MyCookbook" component={Cookbook} />
							<Route exact path="/MyFridge" component={Fridge} />
							<Route exact path="/MyShoppingList" component={ShoppingListContainer} />
							<Route exact path="/Login" component={LoginPage} />
							<Route exact path="/SignUp" component={SignUpPage} />
							<Route path="/Recipes" component={RecipePage} />
							{/* <Route exact path="/Search" component={SearchResults} /> */}
						</Switch>
					</Col>
					</Row>
				</Container>
			</Router>
		</div>
	)
}

export default connect(null, { getProfileFetch })(App);

// SAMPLE FETCH TO SIGNUP

// fetch('http://localhost:4000/api/v1/users', {
// 	method: 'POST',
// 	headers: {
// 		'Content-Type': 'application/json',
// 		Accept: 'application/json'
// 	},
// 	body: JSON.stringify({
// 		user: {
// 			username: "niki",
// 			password: "potato"
// 		}
// 	})
// })
// 	.then(r => r.json())
// 	.then(console.log)

// SAMPLE FETCH TO LOGIN

// fetch('http://localhost:4000/api/v1/login', {
// 	method: 'POST',
// 	headers: {
// 		'Content-Type': 'application/json',
// 		Accept: 'application/json'
// 	},
// 	body: JSON.stringify({
// 		user: {
// 			username: "niki",
// 			password: "potato"
// 		}
// 	})
// })
// 	.then(r => r.json())
// 	.then(res => {data = JSON.parse(res.user_data);console.log(res)})

// RETURNS USER_INGREDIENTS_DATA


// SAMPLE FETCH TO ALL RECIPES BY A USER

// fetch('http://localhost:4000/api/v1/chefs/niki')
// .then(r => r.json()).then(console.log)

// SAMPLE CREATE A RECIPE

// fetch('http://localhost:4000/recipes/new', {
// 	method: 'POST',
// 	headers: {
// 		'Content-Type': 'application/json',
// 		Accept: 'application/json',
// 		Authorization: `Bearer ${token}`
// 	},
// 	body: JSON.stringify({
// 		recipe: {
// 			uuid: "ba41038-d4a7-77c0-8e30-cb6dbfc064",
// 			title: "New UGHHHHH testis",
// 			description: "whatever descr",
// 			cookingTime: 12,
// 			prepTime: 10,
// 			servingCount: 2,
// 			imageLink: "https://www.thespruceeats.com/thmb/GknNSOSoICF6LsuXPN0PipSTAC8=/1500x844/smart/filters:no_upscale()/foolproof-traditional-pancake-recipe-435607-10_preview-5b0ee3358023b90036179861.jpeg",
// 			instructions: "do the first thing|||do the second thing|||do the last thing",
// 			ingredients: [{
// 					uuid: 'aa1da3-f1bb-bb82-ca11-36a5e20e2452',
// 					weight: '200'
// 				},
// 				{
// 					uuid: '38a436-0da-bce4-a7a2-3751068bc',
// 					weight: '150'
// 				},
// 				{
// 					uuid: 'a2f77-cb3-8c1-b806-8cde7d11a8e',
// 					weight: '100'
// 				}]
// 		}
// 	})
// })
// 	.then(r => r.json())
// 	.then(console.log)

// FETCH UPDATE USER INGREDIENTS

// fetch('http://localhost:4000/api/v1/ingredients/update', {
// 	method: 'POST',
// 	headers: {
// 		'Content-Type': 'application/json',
// 		Accept: 'application/json',
// 		Authorization: `Bearer ${token}`
// 	},
// 	body: JSON.stringify({
// 		 user: {
// 				ingredients: newIng
// 		 }
// 	})
// })
// 	.then(r => r.json())
// 	.then(console.log)

