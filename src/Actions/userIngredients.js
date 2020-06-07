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

export const newUserIngredientsFetch = (newIngredients, currentUserIngredients) => {
  debugger
	let token = localStorage.getItem('token')
	if (token) {
		let ingredients = [];
		newIngredients.forEach(ingredient => {
			let arr = currentUserIngredients.filter(ui => ui.ingredient._id === ingredient.value);
			if (arr.length === 0)
				ingredients.push({
          _id: ingredient.value,
					weight: 0
				})
		})
		return dispatch => {
			return fetch(`${API_URL}/api/userIngredients`, {
					method: "POST",
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
						'Authorization': `Bearer ${token}`
					},
					body: JSON.stringify({
						ingredients
					})
				})
				.then(res => res.json())
				.then(console.log)
		}
	}
}

export const updateUserIngredientFetch = (ui) => {
	let token = localStorage.getItem('token')
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
				.then(console.log)
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
				.then(console.log)
		}
	}
}