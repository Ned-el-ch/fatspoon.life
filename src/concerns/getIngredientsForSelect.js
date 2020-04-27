import * as ingredients from "../data/ingredients.json";

export const getIngredientsForSelect = () => {
	// debugger;
	let ing = ingredients.default;
	let arr = [];
	ing.forEach(element => {
		let key = Object.keys(element)[0];
		// debugger;
		element[key].forEach(el => {
			let cat = categoryColors.find(e => e[Object.keys(element)[0]]);
			// debugger;
			arr.push(
				{
					value: el,
					label: el,
					color: cat[Object.keys(cat)[0]].background
				}
			)
		})
	});
	// debugger;
	return arr;
}

let categoryColors = [
	{"Eggs & Dairy"			: {"background": '#f2e9bf', "font": "#062035"}},
	{"Fruits & Veggies"		: {"background": '#b0f763', "font": "#062035"}},
	{"Bread, Pasta & Noods"	: {"background": '#debb6a', "font": "#062035"}},
	{"Baking & Grains"		: {"background": '#d6c089', "font": "#062035"}},
	{"Meats & Seafood"		: {"background": '#b5250e', "font": "#062035"}},
	{"Seeds & Spices"			: {"background": '#a3a286', "font": "#062035"}},
	{"Oils & Condiments"		: {"background": '#edede4', "font": "#062035"}},
	{"Legumes & Nuts"			: {"background": '#FFC400', "font": "#062035"}},
	{"Spirits"					: {"background": '#062035', "font": "#ffffff"}},
	{"Stocks"					: {"background": '#ed851c', "font": "#062035"}},
	{"Sweets & Biscuits"		: {"background": '#cc9200', "font": "#062035"}},
	// {"Fruits"					: {"background": '#ff6347', "font": "#062035"}},
	// {"Sweeteners"				: {"background": '#f3ffd4', "font": "#062035"}},
	// {"Fish"						: {"background": '#00B8D9', "font": "#ffffff"}},
	// {"Seafood"					: {"background": '#92fcf7', "font": "#062035"}},
	// {"Oils"						: {"background": '#f5f752', "font": "#062035"}},
	// {"Pastes & Sauces"		: {"background": '#f56c53', "font": "#062035"}},
	// {"Nuts"						: {"background": '#5c4200', "font": "#ffffff"}},



	// { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
	// { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
	// { value: 'purple', label: 'Purple', color: '#5243AA' },
	// { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
	// { value: 'orange', label: 'Orange', color: '#FF8B00' },
	// { value: 'yellow', label: 'Yellow', color: '#FFC400' },
	// { value: 'green', label: 'Green', color: '#36B37E' },
	// { value: 'forest', label: 'Forest', color: '#00875A' },
	// { value: 'slate', label: 'Slate', color: '#253858' },
	// { value: 'silver', label: 'Silver', color: '#666666' }
	// { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
	// { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
];