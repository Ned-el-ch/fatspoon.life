const initialState = {
	user: {}
}

export default (state = initialState, action) => {

	switch (action.type) {
		case "LOGIN_USER":
			return {...state, user: action.userData};

		default:
			return state;
	}
}