
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

export const formatDate = date => {
	let newDate = new Date(date.split("T")[0])
	let daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
	let monthNames = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
	let day = daysOfTheWeek[newDate.getDay() - 1]
	let month = monthNames[newDate.getMonth()]
	let number = newDate.getDate();
	let year = newDate.getFullYear();
	const th = (n) => {
		if (n === 1 || n === 21 || n === 31) {
			return `${n}st`
		} else if (n === 2 || n === 22) {
			return `${n}nd`
		} else if (n === 3 || n === 23) {
			return `${n}rd`
		} else {
			return `${n}th`
		}
	}
	return `${day}, ${th(number)} ${month}, ${year}`
}
