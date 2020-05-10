export default (state = [], action) => {

	let index;

	switch (action.type) {

		case "ADD_TO_MEAL_PLAN":
			index = state.find(e => e.uuid === action.recipe.uuid)
			if (!!index) {
				return [...state, action.recipe]
			} else {
				return state;
			}

		case "REMOVE_FROM_MEAL_PLAN":
			index = state.find(e => e.uuid === action.recipeID)
			if (index) {
				return state.filter(e => e.uuid !== action.recipeID)
			} else {
				return state;
			}

		default:
			return state;

	}

}
