export default (state = [], action) => {

	switch (action.type) {

		case "LOAD_RECIPES":
			return [...action.recipes]

		case "CLEAR_RECIPES":
			return []

		default:
			return state;

	}
}