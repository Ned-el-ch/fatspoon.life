import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addRecipe } from '../Actions/recipes';
import RecipeForm from "../Components/RecipeForm";
const initialState = () => {
	return (
		{
			recipe: null
		}
	)
}

const RecipeFormContainer = () => {
	const [state, updateRecipe] = useState(initialState);
	return (
		<div className="recipe-form-container">
			{ 
			state.recipe
			?
			<div className="recipe-form">
				<RecipeForm />
			</div>
			:
			<div>
				<button
					className="rf-new-recipe-button"
					onClick={() => updateRecipe({recipe: {}})}
				>Add a new recipe!</button>
			</div>
			}
		</div>
	)
}

const mapStateToProps = state => {
	return (
		{
			ingredients: state.search.ingredients
		}
	)
}

export default connect(mapStateToProps, { addRecipe })(RecipeFormContainer);