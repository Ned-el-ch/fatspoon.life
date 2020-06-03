import * as data from "../Data/demo.json";
import * as allIngredients from "../Data/ingredients.json";

const sort = (arr) => {
	return arr.sort((a, b) => {
		if (a.index > b.index) return 1;
		if (b.index > a.index) return -1;
		return 0;
	})
}

export default (state = data.ingredients, action) => {

	// let ingredient;
	// let index;
	// let newState;

	switch (action.type) {

		case "CLEAR_INGREDIENTS":
			return [];

		case "LOAD_INGREDIENTS":
			return [...action.ingredients]
			// if (action.ingredients.length !== 0) {
			// 	newState = action.ingredients.map(ing => {
			// 		return Object.assign({}, allIngredients.default.find(i => i.uuid === ing.ingredient.uuid), {weight: ing.weight})
			// 	})
			// 	newState = sort(newState);
			// 	return newState;
			// } else {
			// 	return state
			// }

		// case "ADD_INGREDIENTS":
		// 	let newIngredients = [];
		// 	action.ingredients.forEach(data => {
		// 		let arr = state.filter(stateIng => stateIng.uuid === data.ingredient.uuid);
		// 		if (arr.length === 0)
		// 			newIngredients.push(Object.assign({}, data.ingredient, {weight: 0}))
		// 	})
		// 	newState = [...state, ...newIngredients];
		// 	newState = sort(newState);
		// 	return newState;

		// case "REMOVE_INGREDIENT":
		// 	newState = state.filter(ingredient => ingredient.uuid !== action.ingredientID);
		// 	newState = sort(newState);
		// 	return newState;

		// case "EDIT_INGREDIENT":
		// 	ingredient = state.find(i => i.uuid === action.ingredient.uuid);
		// 	index = state.indexOf(ingredient);
		// 	newState = [
		// 		...state.slice(0, index),
		// 		Object.assign({}, ingredient, { weight: action.ingredient.weight }),
		// 		...state.slice(index + 1)
		// 	];
		// 	newState = sort(newState);
		// 	return newState;

		default:
			return state;

	}
}