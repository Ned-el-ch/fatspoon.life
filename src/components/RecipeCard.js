import React from 'react';

const RecipeCard = ({recipe, starRecipe, unstarRecipe}) => {
	return (
		<div>
			<div className="rc-label">{recipe.label}</div>
			<div className="rc-buttons-container">
				<button className="rc-star-recipe-button" onClick={() => {starRecipe(recipe)}}>Star Recipe</button>
				<button className="rc-unstar-recipe-button" onClick={() => {unstarRecipe(recipe.uri)}}>Unstar Recipe</button>
			</div>
			<div className="rc-source-container">
				<a className="rc-source-link" href={recipe.url} target="_blank" rel="noopener noreferrer">
					<span className="rc-source-link-text">Source: {recipe.source}</span>
				</a>
			</div>
			<br/>
		</div>
	)
}

export default RecipeCard;