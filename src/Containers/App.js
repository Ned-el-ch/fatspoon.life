import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Fridge from './Fridge';
import Cookbook from './Cookbook';
import MealPlanner from './MealPlanner';
import SearchResults from './SearchResults';
import NavbarContainer from './NavbarContainer';

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default class App extends Component {
	render() {
		return (
			<div className="app-container">
				<Router>
					<NavbarContainer />
					<Container fluid>
						<Row className="align-self-start justify-content-center">
						<Col xs sm={12} md={12} lg={10} xl={8} className="col-xxl">
							<Switch>
								<Route exact path="/" component={MealPlanner} />
								<Route exact path="/MyCookbook" component={Cookbook} />
								<Route exact path="/MyFridge" component={Fridge} />
								<Route path="/Search" component={SearchResults} />
							</Switch>
						</Col>
						</Row>
					</Container>
				</Router>
			</div>
		)
	}
}