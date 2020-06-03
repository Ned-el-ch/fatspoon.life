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
import { loadIngredients, allIngredientsFetch } from "../Actions/ingredients.js"
import { userProfileFetch } from "../Actions/userAuth.js"
import RoutesWrapper from '../Components/RoutesWrapper';

const App = ({ user, userProfileFetch, allIngredientsFetch }) => {

	useEffect( () => {
		allIngredientsFetch()
		userProfileFetch()
	}, [allIngredientsFetch, userProfileFetch])

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
									<RoutesWrapper location={location}/>
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

export default connect(null, { userProfileFetch, allIngredientsFetch })(App);