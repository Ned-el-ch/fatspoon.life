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


export const fetchAddToMealPlan = recipeID => {
	addToMealPlan(recipeID)
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
				body: JSON.stringify({recipe: {uuid: recipeID}})
			})
			.then(res => res.json())
			.then(data => {
				if (data.error || data.message) {
					console.log(data)
					removeFromMealPlan(recipeID)
				} else {
					debugger
					dispatch(addToMealPlan(data.recipe.uuid))
				}
			})
		}
	}
}