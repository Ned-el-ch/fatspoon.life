import moment from 'moment'

export const addToMealPlan = (id, recipe, planned_date, multiplier) => {
	return ({
		type: "ADD_TO_MEAL_PLAN",
		id,
		planned_date,
		recipe,
		multiplier
	})
}

export const fetchAddToMealPlan = (id, recipe, planned_date, multiplier) => {
	return ({
		type: "ADD_TO_MEAL_PLAN",
		id,
		planned_date,
		recipe,
		multiplier
	})
}

export const fetchRemoveFromMealPlan = id => {
	return ({
		type: "REMOVE_FROM_MEAL_PLAN",
		id
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

export const fetchUpdateMultiplier = (id, multiplier) => {
	return ({
		type: "UPDATE_MULTIPLIER",
		id,
		multiplier
	})
}