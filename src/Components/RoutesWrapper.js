import React from 'react'
import { Route, Switch } from 'react-router-dom';
import ShoppingListPage from '../Containers/ShoppingListPage';
import Fridge from '../Containers/Fridge';
import RecipesPage from '../Containers/RecipesPage';
import RecipePage from '../Containers/RecipePage';
import LoginPage from '../Containers/LoginPage';
import SignUpPage from '../Containers/SignUpPage';
import HomePage from '../Containers/HomePage';
import AboutPage from '../Containers/AboutPage';
import OrdersPage from '../Containers/OrdersPage';
import SearchResults from '../Containers/SearchResults';
import LottieDino from './LottieDino';
import DefaultPage from '../Containers/DefaultPage';
import { connect } from 'react-redux';
// import ProfilePage from '../Containers/ProfilePage';

const RoutesWrapper = ({location, user}) => {
	if (user) {
		return (
			<Switch location={location}>
				<Route exact path="/" component={OrdersPage}></Route>
				<Route exact path="/Recipes" component={RecipesPage}/>
				<Route exact path="/Inventory" component={Fridge}/>
				<Route exact path="/ShoppingList" component={ShoppingListPage}/>
				<Route exact path="/About" component={AboutPage}></Route>
				<Route><DefaultPage/></Route>
				{/* <Route exact path="/About" component={AboutPage}/> */}
				{/* <Route exact path="/Search" component={SearchResults}/> */}
				{/* <Route exact path="/MyProfile" component={ProfilePage}/> */}
				{/* <Route path="/Search/:query" component={SearchResults}/> */}
				{/* <Route path="/Recipes/:recipe" component={RecipePage}/> */}
			</Switch>
		)
	} else {
		return (
			<Switch location={location}>
				<Route exact path="/" component={HomePage}></Route>
				<Route exact path="/Login"component={LoginPage}/>
				<Route exact path="/SignUp" component={SignUpPage}/>
				<Route exact path="/About" component={AboutPage}></Route>
				<Route><DefaultPage/></Route>
				{/* <Route exact path="/About" component={AboutPage}/> */}
				{/* <Route exact path="/Search" component={SearchResults}/> */}
				{/* <Route path="/Search/:query" component={SearchResults}/> */}
				{/* <Route path="/Recipes/:recipe" component={RecipePage}/> */}
				{/* <Route><HomePage userIsLoggedIn={user}/></Route> */}
			</Switch>
		)
	}
}

const mapStateToProps = state => {
	return (
		{
			user: state.user
		}
	)
}

export default connect(mapStateToProps)(RoutesWrapper);