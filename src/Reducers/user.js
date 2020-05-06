const initialState = {}

export default (state = initialState, action) => {

	switch (action.type) {
		case "LOGIN_USER":
			return {...state, ...action.userData};
		case "LOGOUT_USER":
			return {...state, user: {}}
		default:
			return state;
	}
}