import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import { TransitionGroup, Transition } from "react-transition-group";
import { play, exit } from "../Concerns/animations"

import { allIngredientsFetch } from "../Actions/ingredients"
import { userProfileFetch } from "../Actions/userAuth"

import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import RoutesWrapper from '../Components/RoutesWrapper';
import NavbarContainer from './NavbarContainer';

const App = ({ userProfileFetch, allIngredientsFetch }) => {

	useEffect( () => {
		if (localStorage.token) {
			allIngredientsFetch()
			userProfileFetch()
		}
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