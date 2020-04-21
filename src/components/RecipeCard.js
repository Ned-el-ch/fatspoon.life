import React from 'react'

const RecipeCard = ({recipe, removeRecipe, starRecipe, unstarRecipe}) => {
	return (
		<div>
			<h1>{recipe.name}</h1>
			<p>{recipe.description}</p>
			<br />
			<button onClick={() => {starRecipe(recipe.id)}}>Star Recipe</button>
			<br/>
			<button onClick={() => {unstarRecipe(recipe.id)}}>Unstar Recipe</button>
			<br/>
			<button onClick={() => {removeRecipe(recipe.id)}}>Remove Recipe</button>
		</div>
	)
}

export default RecipeCard;