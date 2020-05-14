// import * as data from "../Data/demo.json";


export default (state = [], action) => {

	let index;

	switch (action.type) {

		case "ADD_RECIPE":
			let recipeExists = state.find(r => r.uuid === action.recipe.uuid)
			if (recipeExists) {
				return state;
			} else {
				return [...state, action.recipe]
			}

		case "STAR_RECIPE":
			index = state.findIndex(recipe => recipe.uuid === action.recipeID);
			if (index === -1) {
				return [...state, action.recipe];
			} else {
				return state;
			}

		case "UNSTAR_RECIPE":
			return state.filter(recipe => recipe.uuid !== action.recipeID);

			case "LOAD_RECIPES":
				return [...action.recipes]

		default:
			return state;
	}
}
