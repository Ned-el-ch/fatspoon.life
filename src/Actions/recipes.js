export const starRecipe = recipe => {
	return {
		type: "STAR_RECIPE",
		recipe
	}
}

export const unstarRecipe = recipeID => {
	return {
		type: "UNSTAR_RECIPE",
		recipeID
	}
}

export const addRecipe = recipe => {
	return {
		type: "ADD_RECIPE",
		recipe
	}
}

export const addIngredientToRecipe = (recipeID, ingredientID) => {
	return {
		type: "ADD_INGREDIENT_TO_RECIPE",
		recipeID,
		ingredientID
	}
}

export const loadRecipes = recipes => {
	return (
		{
			type: "LOAD_RECIPES",
			recipes
		}
	)
}