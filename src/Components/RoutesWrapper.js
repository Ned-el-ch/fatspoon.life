import React from 'react'
import { Route, Switch } from 'react-router-dom';
import ShoppingListPage from '../Containers/ShoppingListPage.js';
import Fridge from '../Containers/Fridge.js';
import Cookbook from '../Containers/Cookbook.js';
import RecipePage from '../Containers/RecipePage.js';
import LoginPage from '../Containers/LoginPage.js';
import SignUpPage from '../Containers/SignUpPage.js';
import HomePage from '../Containers/HomePage.js';
import AboutPage from '../Containers/AboutPage.js';

const RoutesWrapper = ({location, user}) => {
	if (user) {
		return (
			<Switch location={location}>
				<Route exact path="/"><HomePage userIsLoggedIn={user}/></Route>
				<Route exact path="/MyCookbook"><Cookbook/></Route>
				<Route exact path="/MyFridge"><Fridge/></Route>
				<Route exact path="/MyShoppingList"><ShoppingListPage/></Route>
				<Route path="/Recipes"><RecipePage/></Route>
				<Route exact path="/About"><AboutPage/></Route>
			</Switch>
		)
	} else {
		return (
			<Switch location={location}>
				<Route exact path="/"><HomePage userIsLoggedIn={user}/></Route>
				<Route exact path="/Login"><LoginPage/></Route>
				<Route exact path="/SignUp"><SignUpPage/></Route>
				<Route exact path="/About"><AboutPage/></Route>
			</Switch>
		)
	}
}

export default RoutesWrapper;