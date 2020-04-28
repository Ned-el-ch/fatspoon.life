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

export const increaseIngredient = (ingredientID, quantity) => {
	return {
		type: "INCREASE_INGREDIENT",
		ingredientID,
		quantity
	}
}

export const decreaseIngredient = (ingredientID, quantity) => {
	return {
		type: "DECREASE_INGREDIENT",
		ingredientID,
		quantity
	}
}