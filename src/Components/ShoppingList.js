import React from 'react'
import { connect } from 'react-redux';
import { updateIngredients, editIngredient } from '../Actions/ingredients'

const ShoppingList = ({ingredients, mealPlan, updateIngredients, editIngredient}) => {
	return (
		<div className="shopping-list">
			
		</div>
	)
}

const mapStateToProps = state => {
	return (
		{
			ingredients: state.ingredients,
			mealPlan: state.mealPlan
		}
	)
}

export default connect(mapStateToProps, { updateIngredients, editIngredient })(ShoppingList);