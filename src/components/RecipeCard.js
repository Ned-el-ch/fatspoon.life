import React from 'react';

const RecipeCard = ({recipe, starRecipe, unstarRecipe}) => {
	return (
		<div>
			<div className="rc-label">{recipe.label}</div>
			<div className="rc-buttons-container">
				<button className="rc-star-recipe-button" onClick={() => {starRecipe(recipe)}}>Star Recipe</button>
				<button className="rc-unstar-recipe-button" onClick={() => {unstarRecipe(recipe.uri)}}>Unstar Recipe</button>
			</div>
			<br/>
		</div>
	)
}

export default RecipeCard;