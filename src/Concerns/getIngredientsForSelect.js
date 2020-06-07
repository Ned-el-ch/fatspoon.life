

export const getIngredientsForSelect = (ingredients) => {
	let ingredientsArray = ingredients.map(e => Object.assign({}, e));
	let selectItems = [];
	for (const ingredient of ingredientsArray) {
		let category = categoryColors.find(e => Object.keys(e)[0] === ingredient.category);
		let formattedItem = {
			value: ingredient._id,
			label: ingredient.name,
			color: category[ingredient.category].color
		}
    selectItems.push(formattedItem)
	}
	return selectItems;
}

let categoryColors = [
	{"Eggs & Dairy"         : {"color": '#ffe0ac'}},
	{"Fruits & Veggies"     : {"color": '#ffacb7'}},
	{"Bread, Pasta & Noods" : {"color": '#6886c5'}},
	{"Baking & Grains"      : {"color": '#85a392'}},
	{"Meats & Seafood"      : {"color": '#f5b971'}},
	{"Seeds & Spices"       : {"color": '#856c8b'}},
	{"Oils & Condiments"    : {"color": '#aabecf'}},
	{"Legumes & Nuts"       : {"color": '#dcedc1'}},
	{"Sweets & Spirits"     : {"color": '#f1935c'}},
];
