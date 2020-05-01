import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Fridge from './Fridge.js';
import Cookbook from './Cookbook.js';
import MealPlannerContainer from './MealPlannerContainer.js';
import SearchResults from './SearchResults.js';
import NavbarContainer from './NavbarContainer.js';

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const App = () => {
	return (
		<div className="app-container">
			<Router>
				<NavbarContainer />
				<Container fluid>
					<Row className="align-self-start justify-content-center">
					<Col xs sm md lg xl={8} className="col-xxl">
						<Switch>
							<Route exact path="/" component={MealPlannerContainer} />
							<Route exact path="/MyCookbook" component={Cookbook} />
							<Route exact path="/MyFridge" component={Fridge} />
							{/* <Route exact path="/Search" component={SearchResults} /> */}
						</Switch>
					</Col>
					</Row>
				</Container>
			</Router>
		</div>
	)
}

export default App;