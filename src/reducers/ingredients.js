export default (state = [], action) => {

	let ingredient;
	let index;

	switch (action.type) {

		case "ADD_INGREDIENTS":
			let ingredients = action.ingredients.map(ing => {
				return Object.assign({}, ing.ingredient, {quantity: 0})
			})
			return [...state, ...ingredients];
			// return [...state, Object.assign({}, action.ingredient, {quantity: 0})];

		case "REMOVE_INGREDIENT":
			return state.filter(ingredient => ingredient.id !== action.ingredientID);

		case "INCREASE_INGREDIENT":
			ingredient = state.find(i => i.id === action.ingredientID);
			index = state.indexOf(ingredient);
			return [
				...state.slice(0, index),
				Object.assign({}, ingredient, { quantity: ingredient.quantity += action.quantity }),
				...state.slice(index + 1)
			];

		case "DECREASE_INGREDIENT":
			ingredient = state.find(i => i.id === action.ingredientID);
			index = state.indexOf(ingredient);
			if (ingredient.quantity >= action.quantity)
			{
				return [
					...state.slice(0, index),
					Object.assign({}, ingredient, { quantity: ingredient.quantity -= action.quantity }),
					...state.slice(index + 1)
				];
			}
			else
			{
				return [
					...state.slice(0, index),
					Object.assign({}, ingredient, { quantity: 0 }),
					...state.slice(index + 1)
				];
			}

		default:
			return state;

	}

}