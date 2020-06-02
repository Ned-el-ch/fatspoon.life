let initialState = {
	recipes: [],
	ingredients: []
}

export default (state = initialState, action) => {

	switch (action.type) {

		case "ADD_RECIPE_RESULTS":
			return {recipes: action.recipeResults, ingredients: [...state.ingredients]};

		case "ADD_INGREDIENTS":
			return {recipes: [...state.recipes], ingredients: action.ingredients};

		case "CLEAR_RECIPE_RESULTS":
			return {recipes: [], ingredients: [...state.ingredients]};

		default:
			return state;
	}

}