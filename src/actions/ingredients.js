export const addIngredient = ingredient => {
	return {
		type: "ADD_INGREDIENT",
		ingredient: Object.assign({}, ingredient, {amount: 0})
	}
}

export const removeIngredient = ingredientID => {
	return {
		type: "REMOVE_INGREDIENT",
		ingredientID
	}
}

export const increaseIngredient = ingredientID => {
	return {
		type: "INCREASE_INGREDIENT",
		ingredientID
	}
}

export const decreaseIngredient = ingredientID => {
	return {
		type: "DECREASE_INGREDIENT",
		ingredientID
	}
}