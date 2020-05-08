import React from 'react'
import PageHeader from '../Components/PageHeader.js';
import MealPlanner from '../Components/MealPlanner.js';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const MealPlannerContainer = ({ recipeCount, ingredientCount }) => {
	return (
		<div className="content meal-planner-container">
			<PageHeader title="Welcome to Fatspoon!"/>
			<div className="content--inner">
				{/* <PageHeader title="My Meal Planner"/> */}
				{recipeCount !== 0
				?
				<div>
					<MealPlanner />
				</div>
				:
				<div>
					<Link to="/MyCookbook">Add some recipes first!</Link>
				</div>
				}
			</div>
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
)(MealPlannerContainer);