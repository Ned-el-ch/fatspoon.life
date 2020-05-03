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

const RecipeFormContainer = ({addRecipe}) => {
	const [state, updateRecipe] = useState(initialState);
	return (
		<div className="recipe-form-container">
			{ 
			!state.recipe
			?
			<div className="recipe-form">
				<RecipeForm handleRecipe={addRecipe}/>
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

export default connect(null, { addRecipe })(RecipeFormContainer);