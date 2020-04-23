export default (state = [], action) => {

	switch (action.type) {

		case "ADD_RECIPE_RESULTS":
			return [...state, action.recipeResults];

		case "CLEAR_RECIPE_RESULTS":
			return [];

		default:
			return state;
	}
}