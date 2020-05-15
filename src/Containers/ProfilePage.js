import React from 'react'
import PageHeader from '../Components/PageHeader.js';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
	return (
		<div className="content hp-container">
			<PageHeader title="Your profile will be here soon!"/>
			<div className="content--inner">
				<div className="hp-app-get-started-container">
					<span className="hp-app-get-started">Get started by adding your own recipes in <Link to="/MyCookbook">My Cookbook</Link> or <Link to="/Search">Search</Link> for some! When you view a recipe authored by someone else you can star it, and it'll be added to your cookbook!</span>
				</div>
				<div className="hp-app-get-started-container">
					<span className="hp-app-get-started">Additionally, when viewing a recipe you can add it to your <Link to="/">Meal Planner</Link>, choosing the number of servings and date. If you've planned multiple recipes in a week, the meal planner will show you on which one you'll run out of a certain ingredient!</span>
				</div>
				<div className="hp-app-get-started-container">
					<span className="hp-app-get-started">Your <Link to="/MyShoppingList">Shopping List</Link> will automatically populate with the items you need for the current week!</span>
				</div>
				<div className="hp-app-get-started-container">
					<span className="hp-app-get-started">When you go shopping, just click DONE on each item from your shopping list to add it to <Link to="/MyFridge">your Fridge</Link>. If you click on an item you can edit the weight to match how much you've purchased!</span>
				</div>
			</div>
		</div>
	)
}

export default ProfilePage