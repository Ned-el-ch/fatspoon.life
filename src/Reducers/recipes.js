const defaultRecipes = [
	{
		id: 'ba41038-d4a7-77c0-8e30-cb6dbfc064',
		info: {
			title: 'Pancakes',
			description: 'it\'s pancakes m8',
			imageLink: 'https://www.inspiredtaste.net/wp-content/uploads/2016/07/Pancake-Recipe-1-1200.jpg',
			prepTime: '15',
			cookingTime: '15',
			servingCount: '2'
		},
		ingredients: [
			{
				id: 'aa1da3-f1bb-bb82-ca11-36a5e20e2452',
				weight: '200'
			},
			{
				id: '38a436-0da-bce4-a7a2-3751068bc',
				weight: '150'
			},
			{
				id: 'a2f77-cb3-8c1-b806-8cde7d11a8e',
				weight: '100'
			}
		],
		instructions: [
			{
				id: '0ba2a0-f53c-750d-4847-d73db46e6fbe',
				text: 'take the thing'
			},
			{
				id: '65a65c6-f7b6-8071-3d6d-0cfaed7cb4b1',
				text: 'then do the other thing idk'
			}
		]
	}
]

export default (state = defaultRecipes, action) => {

	// let index;

	switch (action.type) {

		case "ADD_RECIPE":
			let recipeExists = state.find(r => r.id === action.recipe.id)
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
