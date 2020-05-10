import React from 'react'
import PageHeader from '../Components/PageHeader.js';
import { Link } from 'react-router-dom';

const HomePage = () => {
	return (
		<div className="content hp-container">
			<PageHeader title="Welcome to Fatspoon!"/>
			<div className="content--inner">
				<div className="hp-app-description-container">
					<span className="hp-app-description">Fatspoon makes it easy for you to cook at home more often by helping you sort out the ingredients you have on hand, find recipes you can make with them, as well as create and store your own recipes! Oh, and if you're missing an item just add it to the built-in shopping list!</span>
				</div>
				<div className="hp-app-get-started-container">
					<span className="hp-app-get-started">Get started by <Link to="/Login">logging in</Link> or <Link to="/SignUp">signing up</Link>!</span>
				</div>
			</div>
		</div>
	)
}

export default HomePage