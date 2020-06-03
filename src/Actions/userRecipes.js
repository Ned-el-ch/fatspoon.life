import moment from 'moment'

export const addOrderFetch = (recipe, plannedDate, multiplier, address) => {

	let token = localStorage.token;
	if (token) {
		return dispatch => {
			return fetch("https://ancient-harbor-35585.herokuapp.com/orders", {
					method: "POST",
					headers: {
						'Content-Type': 'application/json',
						'Accept': 'application/json',
						'Authorization': `Bearer ${token}`
					},
					body: JSON.stringify({
						recipe: {
							recipe: recipe._id,
							plannedDate,
							multiplier,
							address
						}
					})
				})
				.then(res => res.json())
				.then(data => {
					console.log(data)
					// if (data.error || data.message) {
					// 	console.log(data)
					// } else {
					// 	dispatch(addToMealPlan(data.id, data.recipe, moment(data.planned_date).format(), data.multiplier))
					// }
				})
		}
	}
}

export const updateOrderFetch = (order) => {

	let token = localStorage.token;
	if (token) {
		return dispatch => {
			return fetch(`https://ancient-harbor-35585.herokuapp.com/orders/${order._id}`, {
					method: "PUT",
					headers: {
						'Content-Type': 'application/json',
						'Accept': 'application/json',
						'Authorization': `Bearer ${token}`
					},
					body: JSON.stringify({
						recipe: order.recipe,
						plannedDate: order.plannedDate,
						multiplier: order.multiplier,
						address: order.address,
						completed: order.completed
					})
				})
				.then(res => res.json())
				.then(console.log)
			// if (data.error || data.message) {
			// 	console.log(data)
			// } else {
			// 	dispatch(addToMealPlan(data.id, data.recipe, moment(data.planned_date).format(), data.multiplier))
			// }
		}
	}
}

export const deleteOrderFetch = (order) => {

	let token = localStorage.token;
	if (token) {
		return dispatch => {
			return fetch(`https://ancient-harbor-35585.herokuapp.com/orders/${order._id}`, {
					method: "DELETE",
					headers: {
						'Content-Type': 'application/json',
						'Accept': 'application/json',
						'Authorization': `Bearer ${token}`
					}
				})
				.then(res => res.json())
				.then(console.log)
			// if (data.error || data.message) {
			// 	console.log(data)
			// } else {
			// 	dispatch(addToMealPlan(data.id, data.recipe, moment(data.planned_date).format(), data.multiplier))
			// }
		}
	}
}


























export const fetchUpdateMultiplier = (action, id, multiplier) => {
	action(id, multiplier)
	let token = localStorage.token;
	if (token) {
		return dispatch => {
			// return fetch("http://localhost:4000/meal_planner/add", {
			return fetch("https://ancient-harbor-35585.herokuapp.com/meal_planner/update_multiplier", {
					method: "POST",
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
						'Authorization': `Bearer ${token}`
					},
					body: JSON.stringify({
						recipe_meal: {
							id,
							multiplier
						}
					})
				})
				.then(res => res.json())
				.then(data => {
					if (data.error || data.message) {
						console.log(data)
					} else {
						dispatch(action(id, data.multiplier))
					}
				})
		}
	}
}

export const updateRecipeFetch = recipe => {
	let token = localStorage.getItem('token');
	if (token) {
		return dispatch => {
			return fetch(`https://ancient-harbor-35585.herokuapp.com/recipes/${recipe._id}`, {
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
			return fetch(`https://ancient-harbor-35585.herokuapp.com/recipes/${recipe._id}`, {
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