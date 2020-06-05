export default (state = null, action) => {

	switch (action.type) {
		case "LOGIN_USER":
			return {
				...action.userData
			};

		case "LOGOUT_USER":
			return null;

		default:
			return state;
	}

}