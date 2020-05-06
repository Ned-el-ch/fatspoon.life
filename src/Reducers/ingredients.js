import * as data from "../Data/demo.json";
import * as allIngredients from "../Data/ingredients.json";

export default (state = data.ingredients, action) => {

	let ingredient;
	let index;

	switch (action.type) {
		case "LOAD_INGREDIENTS":
			let loadedIngredients = action.ingredients.map(ing => {
				debugger;
				return Object.assign({}, allIngredients.default.find(i => i.uuid === ing.ingredient.uuid), {weight: ing.weight})
			})
			// debugger;
			return loadedIngredients;
		case "ADD_INGREDIENTS":
			let newIngredients = [];
			action.ingredients.forEach(data => {
				let arr = state.filter(stateIng => stateIng.id === data.ingredient.id);
				if (arr.length === 0)
					newIngredients.push(Object.assign({}, data.ingredient, {weight: 0}))
			})
			return [...state, ...newIngredients];

		case "REMOVE_INGREDIENT":
			return state.filter(ingredient => ingredient.id !== action.ingredientID);

		case "INCREASE_INGREDIENT":
			ingredient = state.find(i => i.id === action.ingredientID);
			index = state.indexOf(ingredient);
			return [
				...state.slice(0, index),
				Object.assign({}, ingredient, { weight: ingredient.weight += action.weight }),
				...state.slice(index + 1)
			];

		case "DECREASE_INGREDIENT":
			ingredient = state.find(i => i.id === action.ingredientID);
			index = state.indexOf(ingredient);
			if (ingredient.weight >= action.weight)
			{
				return [
					...state.slice(0, index),
					Object.assign({}, ingredient, { weight: ingredient.weight -= action.weight }),
					...state.slice(index + 1)
				];
			}
			else
			{
				return [
					...state.slice(0, index),
					Object.assign({}, ingredient, { weight: 0 }),
					...state.slice(index + 1)
				];
			}

		default:
			return state;

	}

}
