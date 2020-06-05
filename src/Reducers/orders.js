export default (state = [], action) => {

	switch (action.type) {

		case "LOAD_ORDERS":
			return [...action.orders]

		case "CLEAR_ORDERS":
			return []

		default:
			return state;

	}
}