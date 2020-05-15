import React from 'react'
import PageHeader from '../Components/PageHeader'
import { Link } from 'react-router-dom';

const AboutPage = () => {
	return (
		<div className="content ap-container">
			<PageHeader title={"Made by Niki Nedelchev"}/>
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
				<span className="ap-contact">Find me on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Ned_el_ch">Twitter</a>, <a target="_blank" rel="noopener noreferrer" href="https://github.com/Ned-el-ch">GitHub</a>, and <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ned-el-ch/">LinkedIn</a></span>
				<span className="ap-description">This is an SPA I built to practice using React, Redux, SCSS, and Ruby on Rails (as an API). Check out the <a target="_blank" rel="noopener noreferrer" href="https://github.com/Ned-el-ch/fatspoon.life">frontend repo</a> or the <a target="_blank" rel="noopener noreferrer" href="https://github.com/Ned-el-ch/fatspoon.life-backend">backend repo</a> if you want to know more.</span>
				<span className="ap-packages">List of main things I used for the frontend</span>
				<ul className="ap-ul">
					<li className="ap-li">
						React-Redux
					</li>
					<li className="ap-li">
						Redux-Thunk
					</li>
					<li className="ap-li">
						Bootstrap & React-Bootstrap
					</li>
					<li className="ap-li">
						React-Router
					</li>
					<li className="ap-li">
						React-Router-Dom
					</li>
					<li className="ap-li">
						React-Router-Bootstrap
					</li>
					<li className="ap-li">
						React-Select
					</li>
					<li className="ap-li">
						SASS/SCSS for custom styling
					</li>
					<li className="ap-li">
						Custom UUID function
					</li>
					<li className="ap-li">
						Chroma-js for styling react-select
					</li>
				</ul>
			</div>
		</div>
	)
}

export default AboutPage