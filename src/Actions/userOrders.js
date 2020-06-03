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

export const fetchRemoveFromMealPlan = (action, id) => {
	action(id)
	let token = localStorage.token;
	if (token) {
		return dispatch => {
			return fetch("https://ancient-harbor-35585.herokuapp.com/meal_planner/destroy", {
					method: "POST",
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
						'Authorization': `Bearer ${token}`
					},
					body: JSON.stringify({
						recipe_meal: {
							id
						}
					})
				})
				.then(res => res.json())
				.then(data => {
					if (data.error || data.message) {
						console.log(data)
					} else {
						dispatch(action(id))
					}
				})
		}
	}
}


export const addToMealPlan = (id, recipe, planned_date, multiplier) => {
	return ({
		type: "ADD_TO_MEAL_PLAN",
		id,
		planned_date,
		recipe,
		multiplier
	})
}

export const removeFromMealPlan = id => {
	return ({
		type: "REMOVE_FROM_MEAL_PLAN",
		id
	})
}

export const loadMealPlan = meals => {
	return ({
		type: "LOAD_MEAL_PLAN",
		meals
	})
}

export const clearMealPlan = () => {
	return ({
		type: "CLEAR_MEAL_PLAN"
	})
}

export const updateMultiplier = (id, multiplier) => {
	return ({
		type: "UPDATE_MULTIPLIER",
		id,
		multiplier
	})
}