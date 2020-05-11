export default (state = [], action) => {

	let index;

	switch (action.type) {

		case "ADD_TO_MEAL_PLAN":
			index = state.find(e => e.uuid === action.uuid)
			if (!index) {
				return [...state, {uuid: action.uuid, recipe: action.recipe, multiplier: action.multiplier, planned_date: action.planned_date}]
			} else {
				return state;
			}

		case "REMOVE_FROM_MEAL_PLAN":
			index = state.find(e => e.id === action.id)
			if (index) {
				return state.filter(e => e.id !== action.id)
			} else {
				return state;
			}

		case "LOAD_MEAL_PLAN":
			return action.meals

		default:
			return state;

	}

}
