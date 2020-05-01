import React from 'react'
import PageHeader from '../Components/PageHeader.js';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const MealPlanner = ({ recipeCount, ingredientCount }) => {
	return (
		<div className="meal-planner-container">
			<PageHeader title="My Meal Planner"/>
			{recipeCount !== 0
			?
			<div>
				
			</div>
			:
			<div>
				<Link to="/MyCookbook">Add some recipes first!</Link>
			</div>
			}
		</div>
	)
}

const mapStateToProps = state => {
	return (
		{
			recipeCount: state.recipes.length,
			ingredientCount: state.ingredients.length
		}
	)
}

export default compose(
	withRouter,
	connect(mapStateToProps)
)(MealPlanner);