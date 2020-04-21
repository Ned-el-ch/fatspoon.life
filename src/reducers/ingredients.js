export default (state = [], action) => {

	let ingredient;
	let index;

	switch (action.type) {

		case "ADD_INGREDIENT":
			return [...state, action.ingredient];

		case "REMOVE_INGREDIENT":
			return state.filter(ingredient => ingredient.id !== action.ingredientID);

		case "INCREASE_INGREDIENT":
			index = state.findIndex(ingredient => ingredient.id === action.ingredientID);
			ingredient = state[index];
			return [
				...state.slice(0, index),
				Object.assign({}, ingredient, { amount: ingredient.amount += 1 }),
				...state.slice(index + 1)
			];

		case "DECREASE_INGREDIENT":
			index = state.findIndex(ingredient => ingredient.id === action.ingredientID);
			ingredient = state[index];
			if (ingredient.amount > 0) {
				return [
					...state.slice(0, index),
					Object.assign({}, ingredient, { amount: ingredient.amount -= 1 }),
					...state.slice(index + 1)
				];
			} else {
				return state;
			}

		default:
			return state;
	}
}