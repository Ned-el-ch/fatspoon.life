import * as ingredients from "../Data/ingredients.json";

export const getIngredientsForSelect = () => {
	let ingredientsArray = ingredients.default;
	let selectItems = [];
	for (const ingredient of ingredientsArray) {
		let category = categoryColors.find(e => Object.keys(e)[0] === ingredient.category);
		let formattedItem = {
			value: ingredient.uuid,
			label: ingredient.name,
			color: category[ingredient.category].color,
			ingredient
		}
		selectItems.push(formattedItem)
	}
	return selectItems;
}

let categoryColors = [
	{"Eggs & Dairy"         : {"color": '#ffe0ac', "font": "#062035"}},
	{"Fruits & Veggies"     : {"color": '#ffacb7', "font": "#062035"}},
	{"Bread, Pasta & Noods" : {"color": '#6886c5', "font": "#062035"}},
	{"Baking & Grains"      : {"color": '#85a392', "font": "#062035"}},
	{"Meats & Seafood"      : {"color": '#f5b971', "font": "#062035"}},
	{"Seeds & Spices"       : {"color": '#856c8b', "font": "#062035"}},
	{"Oils & Condiments"    : {"color": '#aabecf', "font": "#062035"}},
	{"Legumes & Nuts"       : {"color": '#dcedc1', "font": "#062035"}},
	{"Sweets & Spirits"     : {"color": '#f1935c', "font": "#062035"}},
];
