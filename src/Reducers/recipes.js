export default (state = [], action) => {

	let index;

	switch (action.type) {

		case "ADD_RECIPE":
			return state;

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
