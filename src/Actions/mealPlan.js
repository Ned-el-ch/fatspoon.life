export const addToMealPlan = (uuid, recipe, planned_date, multiplier) => {
	return (
		{
			type: "ADD_TO_MEAL_PLAN",
			uuid,
			planned_date,
			recipe,
			multiplier
		}
	)
}

export const removeFromMealPlan = uuid => {
	return (
		{
			type: "REMOVE_FROM_MEAL_PLAN",
			uuid
		}
	)
}

export const fetchAddToMealPlan = (action, uuid, recipe, planned_date, multiplier) => {
	action(uuid, recipe, planned_date, multiplier)

	let token = localStorage.token;
	if (token) {
		return dispatch => {
			return fetch("http://localhost:4000/meal_planner/add", {
			// return fetch("https://calm-brook-68370.herokuapp.com/meal_planner/add", {
				method: "POST",
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					'Authorization': `Bearer ${token}`
				},
				body: JSON.stringify({recipe: {uuid: recipe.uuid, planned_date, multiplier}})
			})
			.then(res => res.json())
			.then(data => {
				if (data.error || data.message) {
					console.log(data)
					// dispatch(removeFromMealPlan(uuid))
				} else {
					debugger
					dispatch(addToMealPlan(uuid, data, planned_date, multiplier))
				}
			})
		}
	}
}

// export const fetchRemoveFromMealPlan = (recipe, date) => {
// 	RemoveFromMealPlan(recipe.uuid)
// 	let token = localStorage.token;
// 	if (token) {
// 		return dispatch => {
// 			return fetch("https://calm-brook-68370.herokuapp.com/meal_planner/remove", {
// 				method: "POST",
// 				headers: {
// 					'Content-Type': 'application/json',
// 					Accept: 'application/json',
// 					'Authorization': `Bearer ${token}`
// 				},
// 				body: JSON.stringify({recipe: {uuid: recipeID}})
// 			})
// 			.then(res => res.json())
// 			.then(data => {
// 				if (data.error || data.message) {
// 					console.log(data)
// 					dispatch(addToMealPlan(data.recipe, date))
// 				} else {
// 					debugger
// 					displatch(removeFromMealPlan(recipe.uuid))
// 				}
// 			})
// 		}
// 	}
// }