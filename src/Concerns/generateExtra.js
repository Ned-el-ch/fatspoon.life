
export const generateLink = recipe => {
	let link = "Recipes/" + recipe.title.split(" ").slice(0, 4).join("-")
	link += "-" + recipe.uuid;
	return link
}

export const createLabels = (recipe, ingredients) => {
	let availableIngredients = [];
	recipe.recipe_ingredients.forEach(ri => {
		let ing = ingredients.find(i => i.uuid === ri.uuid && i.weight >= ri.weight);
		if (ing)
			availableIngredients.push(ing);
	});
	let labels = {
		missingIngredients: recipe.recipe_ingredients.length - availableIngredients.length,
		vegetarian: true
	};
	return labels;
}
