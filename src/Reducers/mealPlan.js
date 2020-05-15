import moment from 'moment'

export default (state = [], action) => {

	let newState;
	let index;
	let meal;

	switch (action.type) {

		case "CLEAR_MEAL_PLAN":
			return [];

		case "ADD_TO_MEAL_PLAN":
			index = state.find(e => e.id === action.id)
			if (!index) {
				newState = [...state, {id: action.id, recipe: action.recipe, multiplier: action.multiplier, planned_date: action.planned_date}]
				return newState.sort((a,b) => moment(a.planned_date).format('YYYYMMDD') - moment(b.planned_date).format('YYYYMMDD'))
			} else {
				return state;
			}

		case "REMOVE_FROM_MEAL_PLAN":
			index = state.find(e => e.id === action.id)
			if (index) {
				return state.filter(e => e.id !== action.id).sort((a,b) => moment(a.planned_date).format('YYYYMMDD') - moment(b.planned_date).format('YYYYMMDD'))
			} else {
				return state;
			}

		case "LOAD_MEAL_PLAN":
			return action.meals.sort((a,b) => moment(a.planned_date).format('YYYYMMDD') - moment(b.planned_date).format('YYYYMMDD'))

		case "UPDATE_MULTIPLIER":
			meal = state.find(m => m.id === action.id)
			index = state.indexOf(meal);
			newState = [
				...state.slice(0, index),
				Object.assign({}, meal, { multiplier: action.multiplier }),
				...state.slice(index + 1)
			];
			if (meal) {
				return newState.sort((a,b) => moment(a.planned_date).format('YYYYMMDD') - moment(b.planned_date).format('YYYYMMDD'))
			} else {
				return state
			}

		default:
			return state;

	}

}
