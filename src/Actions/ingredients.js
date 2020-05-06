export const addIngredients = ingredients => {
	return {
		type: "ADD_INGREDIENTS",
		ingredients
	}
}

export const removeIngredient = ingredientID => {
	return {
		type: "REMOVE_INGREDIENT",
		ingredientID
	}
}

export const increaseIngredient = (ingredientID, weight) => {
	return {
		type: "INCREASE_INGREDIENT",
		ingredientID,
		weight
	}
}

export const decreaseIngredient = (ingredientID, weight) => {
	return {
		type: "DECREASE_INGREDIENT",
		ingredientID,
		weight
	}
}

export const loadIngredients = ingredients => {
	return {
		type: "LOAD_INGREDIENTS",
		ingredients
	}
}