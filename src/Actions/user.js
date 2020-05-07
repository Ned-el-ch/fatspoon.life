export const userSignUpFetch = user => {
	return dispatch => {
		return fetch("https://calm-brook-68370.herokuapp.com/api/v1/users", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({user})
		})
			.then(res => res.json())
			.then(data => {
				if (data.token) {
					localStorage.setItem("token", data.token)
					dispatch(loginUser(JSON.parse(data.user_data)))
					return false
				} else {
					return true
					// ADD LOGIC TO HANDLE WRONG STUFF
				}
			})
	}
}

export const userLoginFetch = user => {
	return dispatch => {
		return fetch("https://calm-brook-68370.herokuapp.com/api/v1/login", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({user})
		})
			.then(res => res.json())
			.then(data => {
				if (data.token) {
					localStorage.setItem("token", data.token)
					let userData = JSON.parse(data.user_data)
					dispatch({type: "LOGIN_USER", userData })
					return userData.user_ingredients;
				} else {
					// returns true to setAlert(true)
					return true;
				}
			})
	}
}

export const logoutUser = () => {
	localStorage.removeItem("token");
	return (
		{
			type: 'LOGOUT_USER'
		}
	)
}

export const loginUser = userData => ({
		type: 'LOGIN_USER',
		userData
})