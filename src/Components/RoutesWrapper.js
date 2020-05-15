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
import MealPlanner from './MealPlanner.js';
import SearchResults from '../Containers/SearchResults.js';
import LottieDino from './LottieDino.js';
import DefaultPage from '../Containers/DefaultPage.js';
// import ProfilePage from '../Containers/ProfilePage.js';

const RoutesWrapper = ({location, user}) => {
	if (user) {
		return (
			<Switch location={location}>
				<Route exact path="/"><MealPlanner/></Route>
				<Route exact path="/MyCookbook" component={Cookbook}/>
				<Route exact path="/MyFridge" component={Fridge}/>
				<Route exact path="/MyShoppingList" component={ShoppingListPage}/>
				<Route exact path="/About" ><AboutPage userIsLoggedIn={user}/></Route>
				{/* <Route exact path="/About" component={AboutPage}/> */}
				<Route exact path="/Search" component={SearchResults}/>
				{/* <Route exact path="/MyProfile" component={ProfilePage}/> */}
				<Route path="/Search/:query" component={SearchResults}/>
				<Route path="/Recipes/:recipe" component={RecipePage}/>
				<Route><DefaultPage/></Route>
			</Switch>
		)
	} else {
		return (
			<Switch location={location}>
				<Route exact path="/"><HomePage userIsLoggedIn={user}/></Route>
				<Route exact path="/Login"component={LoginPage}/>
				<Route exact path="/SignUp" component={SignUpPage}/>
				{/* <Route exact path="/About" component={AboutPage}/> */}
				<Route exact path="/About" ><AboutPage userIsLoggedIn={user}/></Route>
				<Route exact path="/Search" component={SearchResults}/>
				<Route path="/Search/:query" component={SearchResults}/>
				<Route path="/Recipes/:recipe" component={RecipePage}/>
				<Route><DefaultPage/></Route>
				{/* <Route><HomePage userIsLoggedIn={user}/></Route> */}
			</Switch>
		)
	}
}

export default RoutesWrapper;