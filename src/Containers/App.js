import React, { useEffect, useCallback } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom';
import { TransitionGroup, Transition } from "react-transition-group";
import { play, exit } from "../Concerns/animations"
import NavbarContainer from './NavbarContainer.js';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { connect } from 'react-redux';
import { loadIngredients } from "../Actions/ingredients.js"
import { loginUser, logoutUser } from "../Actions/user.js"
import RoutesWrapper from '../Components/RoutesWrapper';

const App = ({ user, loginUser, logoutUser, loadIngredients }) => {
	const userDataCallback = useCallback(
		(userData) => {
			loginUser(userData)
			loadIngredients(userData.user_ingredients)
		},
		[loginUser, loadIngredients],
	)
	useEffect( () => {
		const token = localStorage.token;
		if (token) {
			// called here to optimistically render routes to avoid reloading
			userDataCallback({user_ingredients: []});
			(async function fetchProfile() {
				try {
					await fetch("https://calm-brook-68370.herokuapp.com/api/v1/profile", {
						method: "GET",
						headers: {
							'Content-Type': 'application/json',
							Accept: 'application/json',
							'Authorization': `Bearer ${token}`
						}
					})
						.then(res => res.json())
						.then(data => {
							if (data.message) {
								localStorage.removeItem("token")
								logoutUser()
							} else {
								userDataCallback(data)
							}
						})
				} catch (e) {
					logoutUser()
				}
			})()
		}
	}, [userDataCallback, logoutUser])
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

export default connect(mapStateToProps, { loginUser, logoutUser, loadIngredients })(App);