export default (state = [], action) => {

	let recipe;
	let index;

	switch (action.type) {

		case "ADD_RECIPE":
			return [...state, action.recipe];

		case "REMOVE_RECIPE":
			return state.filter(recipe => recipe.id !== action.recipeID);

		case "STAR_RECIPE":
			index = state.findIndex(recipe => recipe.id === action.recipeID);
			recipe = state[index];
			return [
				...state.slice(0, index),
				Object.assign({}, recipe, { starred: true }),
				...state.slice(index + 1)
			];

		case "UNSTAR_RECIPE":
			index = state.findIndex(recipe => recipe.id === action.recipeID);
			recipe = state[index];
			if (recipe.starred) {
				return [
					...state.slice(0, index),
					Object.assign({}, recipe, { starred: false }),
					...state.slice(index + 1)
				];
			} else {
				return state;
			}
		default:
			return state;
	}
}