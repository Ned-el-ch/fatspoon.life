// const API_URL = "https://ancient-harbor-35585.herokuapp.com"
const API_URL = "http://localhost:6900"

export const addIngredients = ingredients => {
	return {
		type: "ADD_INGREDIENTS",
		ingredients
	}
}

export const removeIngredient = ingredient => {
	return {
		type: "REMOVE_INGREDIENT",
		ingredient
	}
}

export const updateIngredient = ingredient => {
	return {
		type: "UPDATE_INGREDIENT",
		ingredient
	}
}

export const newUserIngredientFetch = (newIngredients, allIngredients) => {
	if (localStorage.token) {
		let ingredients = [];
		newIngredients.forEach(data => {
			let arr = allIngredients.filter(stateIng => stateIng._id === data.ingredient._id);
			if (arr.length === 0)
				ingredients.push(Object.assign({}, data.ingredient, {
					weight: 0
				}))
		})
		return dispatch => {
			return fetch(`${API_URL}/api/userIngredients`, {
					method: "POST",
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
						'Authorization': `Bearer ${localStorage.token}`
					},
					body: JSON.stringify({
						ingredients
					})
				})
				.then(res => res.json())
				.then(data => {
					dispatch(loadIngredients(data.user_ingredients))
				})
		}
	}
}

export const updateUserIngredientFetch = (ui) => {
	let token = localStorage.token
	if (token) {
		return dispatch => {
			return fetch(`${API_URL}/api/userIngredients/${ui._id}`, {
					method: "PUT",
					headers: {
						'Content-Type': 'application/json',
						'Accept': 'application/json',
						'Authorization': `Bearer ${token}`
					},
					body: JSON.stringify({
						weight: ui.weight
					})
				})
				.then(res => res.json())
				.then(data => {
					dispatch(updateIngredient(data.ingredient))
				})
		}
	}
}

export const removeUserIngredientFetch = ui => {
	let token = localStorage.getItem('token')
	if (token) {
		return dispatch => {
			return fetch(`${API_URL}/api/userIngredients/${ui._id}`, {
					method: "DELETE",
					headers: {
						'Content-Type': 'application/json',
						'Accept': 'application/json',
						'Authorization': `Bearer ${token}`
					}
				})
				.then(res => res.json())
				.then(() => {
					dispatch(removeIngredient(ui))
				})
		}
	}
}