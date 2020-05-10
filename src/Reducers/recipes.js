// import * as data from "../Data/demo.json";


export default (state = [], action) => {

	// let index;

	switch (action.type) {

		case "ADD_RECIPE":
			let recipeExists = state.find(r => r.uuid === action.recipe.uuid)
			if (recipeExists) {
				return state;
			} else {
				return [...state, action.recipe]
			}

		case "STAR_RECIPE":
			// index = state.findIndex(recipe => recipe.uri === action.recipe.uri);
			// if (index === -1) {
			// 	return [...state, action.recipe];
			// } else {
			// 	return state;
			// }
			return state;

		case "UNSTAR_RECIPE":
			// return state.filter(recipe => recipe.uri !== action.recipeURI);
			return state;

		default:
			return state;
	}
}
