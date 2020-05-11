import React from 'react'
import PageHeader from './PageHeader'
import MealCard from '../Components/MealCard'
import { connect } from 'react-redux'
import { fetchRemoveFromMealPlan } from "../Actions/mealPlan"
import { generateLink, createLabels } from '../Concerns/generateExtra'

const MealPlanner = ({ingredients, meals, fetchRemoveFromMealPlan}) => {
	return (
		<div className="content meal-planner-container">
			<PageHeader title="My Meal Planner"/>
			<div className="content--inner">
				{meals.map(meal => {
					return (
						<MealCard
							key={meal.id}
							meal={meal}
							recipe={meal.recipe}
							labels={createLabels(meal.recipe, ingredients)}
							link={generateLink(meal.recipe)}
						/>
					)
				})
				}
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return (
		{
			meals: state.mealPlan,
			ingredients: state.ingredients
		}
	)
}

export default connect(mapStateToProps, { fetchRemoveFromMealPlan })(MealPlanner);