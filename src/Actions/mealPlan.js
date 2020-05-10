export const addToMealPlan = (recipe, date) => {
	return (
		{
			type: "ADD_TO_MEAL_PLAN",
			date,
			recipe
		}
	)
}

export const removeFromMealPlan = recipeID => {
	return (
		{
			type: "REMOVE_FROM_MEAL_PLAN",
			recipeID
		}
	)
}

export const fetchAddToMealPlan = (recipe, date) => {
	addToMealPlan(recipe, date)
	let token = localStorage.token;
	if (token) {
		return dispatch => {
			return fetch("https://calm-brook-68370.herokuapp.com/meal_planner/add", {
				method: "POST",
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					'Authorization': `Bearer ${token}`
				},
				body: JSON.stringify({recipe: {uuid: recipe.uuid}})
			})
			.then(res => res.json())
			.then(data => {
				if (data.error || data.message) {
					console.log(data)
					displatch(removeFromMealPlan(recipe.uuid))
				} else {
					debugger
					dispatch(addToMealPlan(data.recipe, date))
				}
			})
		}
	}
}

export const fetchRemoveFromMealPlan = (recipe, date) => {
	RemoveFromMealPlan(recipe.uuid)
	let token = localStorage.token;
	if (token) {
		return dispatch => {
			return fetch("https://calm-brook-68370.herokuapp.com/meal_planner/remove", {
				method: "POST",
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					'Authorization': `Bearer ${token}`
				},
				body: JSON.stringify({recipe: {uuid: recipeID}})
			})
			.then(res => res.json())
			.then(data => {
				if (data.error || data.message) {
					console.log(data)
					dispatch(addToMealPlan(data.recipe, date))
				} else {
					debugger
					displatch(removeFromMealPlan(recipe.uuid))
				}
			})
		}
	}
}