export default (state = [], action) => {

	switch (action.type) {
		case "ADD_TO_SHOPPING_LIST":
			return [...state, ...action.itemsToAdd];

		case "REMOVE_FROM_SHOPPING_LIST":
			return state;

		default:
			return state;
	}
}