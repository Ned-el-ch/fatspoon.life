import React, { useEffect, useCallback } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom';
import { TransitionGroup, Transition } from "react-transition-group";
import { play, exit } from "../Concerns/animations"
import NavbarContainer from './NavbarContainer.js';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { connect } from 'react-redux';
import { loadRecipes } from '../Actions/recipes.js'
import { loadMealPlan } from '../Actions/mealPlan.js'
import { loadIngredients } from "../Actions/ingredients.js"
import { userProfileFetch } from "../Actions/user.js"
import RoutesWrapper from '../Components/RoutesWrapper';

const App = ({ user, userProfileFetch, loadIngredients, loadRecipes, loadMealPlan }) => {
	const userDataCallback = useCallback(
		(userData) => {
			let starred = userData.recipeStars.map(e => e.recipe)
			// loginUser(userData)
			loadIngredients(userData.userIngredients)
			loadRecipes([...userData.recipes, ...starred])
			loadMealPlan(userData.recipeMeals)
		},
		[loadIngredients, loadRecipes, loadMealPlan],
	)
	useEffect( () => {
		const token = localStorage.token;
		// userProfileFetch()
		userProfileFetch()
		.then(userDataCallback)
		.catch(console.log)

		if (token) {
			// called here to optimistically render routes to avoid reloading
			// userDataCallback({user_ingredients: [], recipes: [], recipe_meals: [], recipe_stars: []});
			// (async function fetchProfile() {
			// 	try {
			// 		await fetch("http://localhost:6900/api/users/profile", {
			// 			method: "GET",
			// 			headers: {
			// 				'Content-Type': 'application/json',
			// 				Accept: 'application/json',
			// 				'Authorization': `Bearer ${token}`
			// 			}
			// 		})
			// 			.then(res => res.json())
			// 			.then(data => {
			// 				if (data.message) {
			// 					localStorage.removeItem("token")
			// 					logoutUser()
			// 				} else {
			// 					userDataCallback(data)
			// 				}
			// 			})
			// 	} catch (e) {
			// 		logoutUser()
			// 	}
			// })()

		}
	}, [userDataCallback])
	return (
		<Router>
		<div className="app-container">
				<NavbarContainer />
				<Container fluid>
					<Row className="align-self-start justify-content-center">
					<Col xs sm md lg={10} xl={8} className="col-xxl">
							<Route render={({location}) => {
								const key = location.pathname;
								return (
									<TransitionGroup component={null}>
									<Transition
										key={key}
										appear={true}
										onEnter={(node, appears) => {node ? play(node, appears) : console.log()}}
										onExit={(node, appears) => {node ? exit(node, appears) : console.log()}}
										timeout={{enter: 100, exit: 50}}
									>
									<RoutesWrapper location={location} user={user}/>
									</Transition>
									</TransitionGroup>
									)
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

export default connect(mapStateToProps, { userProfileFetch, loadIngredients, loadRecipes, loadMealPlan })(App);