import React, { useState } from 'react'
import { connect } from 'react-redux';
import { fetchCreateRecipe } from '../Actions/recipes';
import RecipeForm from "../Components/RecipeForm";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const initialState = () => {
	return (
		{
			recipe: null
		}
	)
}

const RecipeFormContainer = ({fetchCreateRecipe}) => {
	const [state, updateRecipe] = useState(initialState);
	return (
		<div className="recipe-form-container">
			{ 
			state.recipe
			?
			<div className="recipe-form">
				<RecipeForm
					handleRecipe={(recipe) => {
						const { uuid, info, ingredients, instructions } = recipe
						fetchCreateRecipe(uuid, info, ingredients, instructions)
						updateRecipe({recipe: null})
					}}
					closeRecipe={() => {updateRecipe({recipe: null})}}
				/>
			</div>
			:
			<Row>
			<Col xs={12} sm={12} md={{ span: 10, offset: 1}} lg={{ span: 10, offset: 1}} className="rf-remove-margin">
				<button
					className="rf-new-recipe-button"
					onClick={() => updateRecipe({recipe: {}})}
				>+</button>
			</Col>
			</Row>
			}
		</div>
	)
}

export default connect(null, { fetchCreateRecipe })(RecipeFormContainer);