const API_KEY = "a57fb7b6f8e9becc02377d311488c289";
const APP_ID = "150e0d60";

export const recipeSearch = (query = {}) => {
	let address = `https://api.edamam.com/search?`;
	for (const key in query) {
		switch (key) {
			case "term":
				address += `q=${query.term}&app_id=${APP_ID}&app_key=${API_KEY}`
				break;
			case "from":
				address += `&from=${query.from}`
				break;
			case "to":
				address += `&to=${query.to}`
				break;
			case "caloriesLow":
				address += `&calories=${query.caloriesLow}`
				break;
			case "caloriesHigh":
				address += `-${query.caloriesHigh}`
				break;
			case "dietaryRestriction":
				address += `&health=${query.dietaryRestriction}`
				break;
			default:
				break;
		}
	}
	return fetch(address)
		.then(res => res.json())
};