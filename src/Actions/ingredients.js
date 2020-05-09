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

export const editIngredient = (ingredientID, weight) => {
	return {
		type: "EDIT_INGREDIENT",
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

export const clearIngredients = () => {
	return {
		type: "CLEAR_INGREDIENTS"
	}
}

export const addNewIngredients = (newIngredients, allIngredients) => {
	if (localStorage.token) {
		let ingredients = [];
		newIngredients.forEach(data => {
			let arr = allIngredients.filter(stateIng => stateIng.uuid === data.ingredient.uuid);
			if (arr.length === 0)
				ingredients.push(Object.assign({}, data.ingredient, {weight: 0}))
		})
		let body = {
			user: {
				ingredients
			}
		}
		return dispatch => {
			return fetch("https://calm-brook-68370.herokuapp.com/api/v1/ingredients/update", {
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
					dispatch(loadIngredients(data.user_ingredients))
				})
		}
	}
}

export const updateIngredients = (ingredient, weight, action) => {
	action(ingredient.uuid, weight)
	if (localStorage.token) {
		let body = {
			user: {
				ingredients: [
					{uuid: ingredient.uuid, weight}
				]
			}
		}
		return dispatch => {
			return fetch("https://calm-brook-68370.herokuapp.com/api/v1/ingredients/update", {
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
					dispatch(loadIngredients(data.user_ingredients))
				})
		}
	}
}

export const removeAnIngredient = (uuid, action) => {
	action(uuid)
	if (localStorage.token) {
		return dispatch => {
			let body = {
				user: {
					ingredients: [
						{uuid}
					]
				}
			}
			return fetch("https://calm-brook-68370.herokuapp.com/api/v1/ingredients/remove", {
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
				dispatch(loadIngredients(data.user_ingredients))
			})
		}
	}
}