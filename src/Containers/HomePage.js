import React from 'react'
import PageHeader from '../Components/PageHeader.js';
import { Link } from 'react-router-dom';

const HomePage = () => {
	return (
		<div className="meal-planner-container">
			<PageHeader title="Welcome to Fatspoon!"/>
			<div className="hp-app-description-container">
				<span className="hp-app-description">Fatspoon makes it easy for you to cook at home more often by helping you sort out the ingredients you have on hand in <Link to="/MyFridge">My Fridge</Link>, find recipes you can make with them, as well as create and store your own recipes in <Link to="/MyCookbook">My Cookbook</Link>! Oh, and if you're missing an item just add it to my <Link to="/MyShoppingList">Shopping List</Link>!</span>
			</div>
			<div className="hp-app-get-started-container">
			<span>Get started by <Link to="/Login">logging in</Link> or <Link to="/SignUp">signing up</Link>!</span>
			</div>
		</div>
	)
}

export default HomePage