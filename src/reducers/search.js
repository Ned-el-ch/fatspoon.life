let initialState = {
	recipes: [],
	ingredients: []
}

export default (state = initialState, action) => {
	switch (action.type) {

		case "ADD_RECIPE_RESULTS":
			return Object.assign({}, state, {recipes: action.recipeResults});

		case "CLEAR_RECIPE_RESULTS":
			return [];

		default:
			return state;
	}
}