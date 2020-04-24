import * as seedRecipes from "../data/recipes.json"

let initialState = {
	recipes: seedRecipes.default,
	ingredients: []
}

export default (state = initialState, action) => {

	let index;
	let recipe;

	switch (action.type) {

		case "ADD_RECIPE_RESULTS":
			return Object.assign({}, state, {recipes: action.recipeResults});

		case "SAVE_TO_COOKBOOK":
			index = state.recipes.findIndex(recipe => recipe.id === action.recipeID);
			recipe = state.recipes[index];
			return Object.assign({}, state, {recipes: action.recipeResults});

		case "CLEAR_RECIPE_RESULTS":
			return [];

		default:
			return state;
	}
}