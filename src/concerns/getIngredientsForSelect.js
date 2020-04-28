import * as ingredients from "../data/ingredients.json";

export const getIngredientsForSelect = () => {
	let ingredientsArray = ingredients.default;
	let selectItems = [];
	// debugger;
	for (const ingredient of ingredientsArray) {
		let category = categoryColors.find(e => Object.keys(e)[0] === ingredient.category);
		let formattedItem = {
			value: ingredient.id,
			label: ingredient.name,
			color: category[ingredient.category].color,
			ingredient
		}
		selectItems.push(formattedItem)
	}
	return selectItems;
}

let categoryColors = [
	{"Eggs & Dairy"         : {"color": '#eeeeee', "font": "#062035"}},
	{"Fruits & Veggies"     : {"color": '#b0f763', "font": "#062035"}},
	{"Bread, Pasta & Noods" : {"color": '#debb6a', "font": "#062035"}},
	{"Baking & Grains"      : {"color": '#c073ff', "font": "#062035"}},
	{"Meats & Seafood"      : {"color": '#ff4f4f', "font": "#062035"}},
	{"Seeds & Spices"       : {"color": '#32eda2', "font": "#062035"}},
	{"Oils & Condiments"    : {"color": '#92fcf7', "font": "#062035"}},
	{"Legumes & Nuts"       : {"color": '#ffff00', "font": "#062035"}},
	{"Sweets & Spirits"     : {"color": '#ed851c', "font": "#062035"}},
	{"Spirits"              : {"color": '#0052CC', "font": "#062035"}},
];