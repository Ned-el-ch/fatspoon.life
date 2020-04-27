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
			let obj =  {
				value: el,
				label: el,
				color: cat[Object.keys(cat)[0]].background
			}
			arr.push(obj)
		})
	});
	// debugger;
	return arr;
}

let categoryColors = [
	{"Eggs & Dairy"			: {"background": '#dddddd', "font": "#062035"}},
	{"Fruits & Veggies"		: {"background": '#b0f763', "font": "#062035"}},
	{"Bread, Pasta & Noods"	: {"background": '#debb6a', "font": "#062035"}},
	{"Baking & Grains"		: {"background": '#c073ff', "font": "#062035"}},
	{"Meats & Seafood"		: {"background": '#ff4f4f', "font": "#062035"}},
	{"Seeds & Spices"			: {"background": '#32eda2', "font": "#062035"}},
	{"Oils & Condiments"		: {"background": '#92fcf7', "font": "#062035"}},
	{"Legumes & Nuts"			: {"background": '#ffff00', "font": "#062035"}},
	{"Spirits"					: {"background": '#0052CC', "font": "#062035"}},
	{"Stocks"					: {"background": '#ed851c', "font": "#062035"}},
	{"Sweets & Biscuits"		: {"background": '#ffcc00', "font": "#062035"}}
];