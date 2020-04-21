export const addRecipe = recipe => {
	return {
		type: "ADD_RECIPE",
		recipe: Object.assign({}, recipe, {starred: false})
	}
}

export const removeRecipe = recipeID => {
	return {
		type: "REMOVE_RECIPE",
		recipeID
	}
}

export const starRecipe = recipeID => {
	return {
		type: "STAR_RECIPE",
		recipeID
	}
}

export const unstarRecipe = recipeID => {
	return {
		type: "UNSTAR_RECIPE",
		recipeID
	}
}