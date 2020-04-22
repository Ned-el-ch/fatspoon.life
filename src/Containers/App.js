import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Fridge from './Fridge';
import Cookbook from './Cookbook';
import MealPlanner from './MealPlanner';
import NavbarContainer from './NavbarContainer';

export default class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<NavbarContainer />
					<Switch>
						<Route exact path="/" component={MealPlanner} />
						<Route exact path="/MyCookbook" component={Cookbook} />
						<Route exact path="/MyFridge" component={Fridge} />
					</Switch>
				</Router>
			</div>
		)
	}
}