const API_KEY = "a57fb7b6f8e9becc02377d311488c289";
const APP_ID = "150e0d60";

export const recipeSearch = (query = {}) => {
	let address = `https://api.edamam.com/search?q=${query.term}&app_id=${APP_ID}&app_key=${API_KEY}&from=${query.from}&to=${query.to}&calories=${query.caloriesLow}-${query.caloriesHigh}&health=${query.dietaryRestriction}`;
	let response;
	fetch(address)
		.then(res => res.json())
		.then(res => {
			console.log(res);
			response = Object.assign({}, res);
		});
	return response;
};