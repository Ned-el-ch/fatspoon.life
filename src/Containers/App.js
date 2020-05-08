import React, { useEffect, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, Transition } from "react-transition-group";
import { play, exit } from "../Concerns/animations"


import Fridge from './Fridge.js';
import Cookbook from './Cookbook.js';
import NavbarContainer from './NavbarContainer.js';

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ShoppingListContainer from './ShoppingListContainer.js';
import RecipePage from './RecipePage.js';
import LoginPage from './LoginPage.js';
import SignUpPage from './SignUpPage.js';
import { connect } from 'react-redux';
import HomePage from './HomePage.js';
import { loadIngredients } from "../Actions/ingredients.js"
import { loginUser } from "../Actions/user.js"
import AboutPage from './AboutPage.js';

const App = ({ user, loginUser, loadIngredients }) => {
	useEffect(() => {
		const token = localStorage.token;
		if (token) {
			const fetchProfile = () => {
			return fetch("https://calm-brook-68370.herokuapp.com/api/v1/profile", {
				method: "GET",
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					'Authorization': `Bearer ${token}`
				}
			})
				.then(res => res.json())
				.then(userData => {
					if (userData.message) {
						localStorage.removeItem("token")
					} else {
						loginUser(userData)
						loadIngredients(userData.user_ingredients)
					}
				})
			}
			fetchProfile()
		}
	}, [])
	return (
		<Router>
		<div className="app-container">
				<NavbarContainer />
				<Container fluid>
					<Row className="align-self-start justify-content-center">
					<Col xs sm md lg={10} xl={8} className="col-xxl">
						<Route render={({location}) => {
							const { pathname, key } = location;
							if (user) {
								return (
								<TransitionGroup component={null}>
								<Transition
									key={key}
									appear={true}
									onEnter={(node, appears) => play(pathname, node, appears)}
									onExit={(node, appears) => exit(node, appears)}
									timeout={{enter: 100, exit: 50}}
								>
									<Switch location={location}>
										<Route exact path="/"><HomePage userIsLoggedIn={user}/></Route>
										<Route exact path="/MyCookbook"><Cookbook/></Route>
										<Route exact path="/MyFridge"><Fridge/></Route>
										<Route exact path="/MyShoppingList"><ShoppingListContainer/></Route>
										<Route path="/Recipes"><RecipePage/></Route>
										<Route exact path="/About"><AboutPage/></Route>
									</Switch>
								</Transition>
								</TransitionGroup>
								)
							} else {
								return (
									<TransitionGroup component={null}>
									<Transition
										key={key}
										appear={true}
										onEnter={(node, appears) => play(pathname, node, appears)}
										onExit={(node, appears) => exit(node, appears)}
										timeout={{enter: 100, exit: 50}}
									>
										<Switch location={location}>
											<Route exact path="/"><HomePage userIsLoggedIn={user}/></Route>
											<Route exact path="/Login"><LoginPage/></Route>
											<Route exact path="/SignUp"><SignUpPage/></Route>
											<Route exact path="/About"><AboutPage/></Route>
										</Switch>
									</Transition>
									</TransitionGroup>
								)
							}
						}}/>
					</Col>
					</Row>
				</Container>
		</div>
		</Router>
	)
}

const mapStateToProps = state => {
	return (
		{user: state.user}
	)
}

export default connect(mapStateToProps, { loginUser, loadIngredients })(App);

// SAMPLE FETCH TO SIGNUP

// fetch('https://calm-brook-68370.herokuapp.com/api/v1/users', {
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

// fetch('https://calm-brook-68370.herokuapp.com//api/v1/login', {
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

// fetch('https://calm-brook-68370.herokuapp.com//api/v1/chefs/niki')
// .then(r => r.json()).then(console.log)

// SAMPLE CREATE A RECIPE

// fetch('https://calm-brook-68370.herokuapp.com//recipes/new', {
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

// fetch('https://calm-brook-68370.herokuapp.com//api/v1/ingredients/update', {
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

