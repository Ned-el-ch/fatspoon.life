export const addRecipeResults = recipeResults => {
	return {
		type: "ADD_RECIPE_RESULTS",
		recipeResults
	}
}

export const clearRecipeResults = recipeResults => {
	return {
		type: "CLEAR_RECIPE_RESULTS",
		recipeResults
	}
}

export const fetchSearchRecipes = (query) => {
	return dispatch => {
		return fetch(`https://calm-brook-68370.herokuapp.com/search/${query}`)
			.then(res => res.json())
			.then(data => {
				if (data.error || data.message) {
					console.log(data)
				} else {
					dispatch(addRecipeResults(data))
				}
			})
	}
}