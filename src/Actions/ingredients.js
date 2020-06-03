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

export const allIngredientsFetch = () => {
	return dispatch => {
		return fetch("https://ancient-harbor-35585.herokuapp.com/api/ingredients", {
				method: "GET",
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			})
			.then(res => res.json())
			.then(data => {
				dispatch(loadIngredients(data.ingredients))
			})
	}
}

export const addIngredientsFetch = () => {
	let token = localStorage.getItem('token')
	if (token) {
		return dispatch => {
			return fetch("https://ancient-harbor-35585.herokuapp.com/api/ingredients", {
					method: "POST",
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