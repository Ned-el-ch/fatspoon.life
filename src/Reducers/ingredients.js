const defaultIngredients = [
	{
		id: '38a436-0da-bce4-a7a2-3751068bc',
		name: 'Milk',
		category: 'Eggs & Dairy',
		nutritionalInfo: {},
		index: 0,
		quantity: 0
	},
	{
		id: '0b4d0-6efe-58bb-2eef-21fe577b2c0f',
		name: 'Butter',
		category: 'Eggs & Dairy',
		nutritionalInfo: {},
		index: 1,
		quantity: 0
	},
	{
		id: '6412fc8-23d-4ab0-2abe-31d4b52c0c0',
		name: 'Self-Raising Flour',
		category: 'Baking & Grains',
		nutritionalInfo: {},
		index: 163,
		quantity: 0
	},
	{
		id: '2f7ff80-8faf-848d-0d7a-f2431e38404',
		name: 'Yogurt',
		category: 'Eggs & Dairy',
		nutritionalInfo: {},
		index: 22,
		quantity: 0
	}
]

export default (state = defaultIngredients, action) => {

	let ingredient;
	let index;

	switch (action.type) {

		case "ADD_INGREDIENTS":
			let newIngredients = [];
			action.ingredients.forEach(data => {
				let arr = state.filter(stateIng => stateIng.id === data.ingredient.id);
				if (arr.length === 0)
					newIngredients.push(Object.assign({}, data.ingredient, {quantity: 0}))
			})
			return [...state, ...newIngredients];

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
