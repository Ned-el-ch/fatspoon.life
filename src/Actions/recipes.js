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
	return ({
		type: "LOAD_RECIPES",
		recipes
	})
}

export const clearRecipes = () => {
	return ({
		type: "CLEAR_RECIPES"
	})
}

export const fetchCreateRecipe = (uuid, info, ingredients, instructions) => {
	const {
		title,
		imageLink,
		description,
		prepTime,
		cookingTime,
		servingCount
	} = info
	if (localStorage.token) {
		let body = {
			recipe: {
				uuid,
				title,
				description,
				imageLink,
				prepTime,
				cookingTime,
				servingCount,
				instructions,
				ingredients
			}
		}
		return dispatch => {
			return fetch("https://ancient-harbor-35585.herokuapp.com/recipes/new", {
					method: "POST",
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
						'Authorization': `Bearer ${localStorage.token}`
					},
					body: JSON.stringify(body)
				})
				.then(res => res.json())
				.then(data => {
					dispatch(addRecipe(data))
				})
		}
	}
}