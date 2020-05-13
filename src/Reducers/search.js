let initialState = {
	recipes: []
}

export default (state = initialState, action) => {

	switch (action.type) {

		case "ADD_RECIPE_RESULTS":
			return {recipes: action.recipeResults};

		case "CLEAR_RECIPE_RESULTS":
			return {recipes: []};

		default:
			return state;
	}

}