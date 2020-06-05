export default (state = [], action) => {

	switch (action.type) {

		case "LOAD_USER_INGREDIENTS":
			return [...action.userIngredients]

		case "CLEAR_USER_INGREDIENTS":
			return []

		default:
			return state;

	}
}