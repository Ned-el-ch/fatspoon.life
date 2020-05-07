import React from 'react'
import PageHeader from '../Components/PageHeader.js';
import { Link } from 'react-router-dom';

const HomePage = () => {
	return (
		<div className="meal-planner-container">
			<PageHeader title="Welcome to Fatspoon!"/>
			<span className="hp-app-description">Fatspoon makes it easy for you to cook at home more often by helping you sort out the ingredients you have on hand in <Link to="/MyFridge">My Fridge</Link>, find recipes you can make with them, as well as create and store your own recipes in <Link to="/MyCookbook">My Cookbook</Link>! Oh, and if you're missing an item just add it to my <Link to="/MyShoppingList">Shopping List</Link>!</span>
			{/* <Link to="/MyCookbook">Add some recipes first!</Link> */}
		</div>
	)
}

export default HomePage