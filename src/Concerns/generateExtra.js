export const generateLink = recipe => {
	let link = "/Recipes/" + recipe.title.split(" ").slice(0, 4).join("-")
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
	let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	let monthNames = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
	let day = daysOfTheWeek[newDate.getDay()]
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

export const formatWeek = (startDate, endDate) => {
	let monthNames = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
	let start = new Date(startDate.split("T")[0])
	let end = new Date(endDate.split("T")[0])
	let startMonth = monthNames[start.getMonth()]
	let startNumber = start.getDate();
	let startYear = start.getFullYear();
	let endMonth = monthNames[end.getMonth()]
	let endNumber = end.getDate();
	let endYear = end.getFullYear();
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
	return `${th(startNumber)} ${startMonth}, ${startYear} — ${th(endNumber)} ${endMonth}, ${endYear}`
}
