// const API_URL = "https://ancient-harbor-35585.herokuapp.com"
const API_URL = "http://localhost:6900"

export const addRecipeFetch = recipe => {
	let token = localStorage.getItem('token');
	if (token) {
		return dispatch => {
			return fetch(`${API_URL}/api/recipes`, {
					method: "POST",
					headers: {
						'Content-Type': 'application/json',
						'Accept': 'application/json',
						'Authorization': `Bearer ${token}`
					},
					body: JSON.stringify({
						
					})
				})
				.then(res => res.json())
				.then(() => {
					dispatch(removeRecipe(recipe))
				})
		}
	}
}

export const updateRecipeFetch = recipe => {
	let token = localStorage.getItem('token');
	if (token) {
		return dispatch => {
			return fetch(`${API_URL}/api/recipes/${recipe._id}`, {
					method: "PUT",
					headers: {
						'Content-Type': 'application/json',
						'Accept': 'application/json',
						'Authorization': `Bearer ${token}`
					},
					body: JSON.stringify({
						
					})
				})
				.then(res => res.json())
				.then(() => {
					dispatch(removeRecipe(recipe))
				})
		}
	}
}

export const removeRecipeFetch = recipe => {
	let token = localStorage.getItem('token');
	if (token) {
		return dispatch => {
			return fetch(`${API_URL}/api/recipes/${recipe._id}`, {
					method: "DELETE",
					headers: {
						'Content-Type': 'application/json',
						'Accept': 'application/json',
						'Authorization': `Bearer ${token}`
					}
				})
				.then(res => res.json())
				.then(() => {
					dispatch(removeRecipe(recipe))
				})
		}
	}
}


export const addRecipe = recipe => {
	return ({
		type: "ADD_RECIPE",
		recipe
	})
}

export const updateRecipe = recipe => {
	return ({
		type: "UPDATE_RECIPE",
		recipe
	})
}

export const removeRecipe = recipe => {
	return ({
		type: "REMOVE_RECIPE",
		recipe
	})
}