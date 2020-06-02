export const userSignUpFetch = (username, password) => {
	return dispatch => {
		return fetch("http://localhost:6900/api/users/signup", {
				method: "POST",
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify({
					username,
					password
				})
			})
			.then(res => res.json())
			.then(data => {
				debugger
				if (data.token) {
					localStorage.setItem("token", data.token)
					dispatch(loginUser(data.userData))
					return false
				} else {
					return true
					// ADD LOGIC TO HANDLE WRONG STUFF
				}
			})
	}
}

export const userLoginFetch = (username, password) => {
	console.log(username, password)
	return dispatch => {
		return fetch("http://localhost:6900/api/users/login", {
				method: "POST",
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify({
					username,
					password
				})
			})
			.then(res => res.json())
			.then(userData => {
				// debugger
				if (userData.token) {
					localStorage.setItem("token", userData.token)
					dispatch({
						type: "LOGIN_USER",
						userData
					})
					return userData;
				} else {
					// returns true to setAlert(true)
					return true;
				}
			})
	}
}

export const userProfileFetch = () => {
	let token = localStorage.getItem('token')
	// debugger
	if (token) {
		return dispatch => {
			return fetch("http://localhost:6900/api/users/profile", {
					method: "GET",
					headers: {
						'Content-Type': 'application/json',
						'Accept': 'application/json',
						'Authorization': `Bearer ${token}`
					}
				})
				.then(data => data.json())
				.then(userData => {
					// debugger
					console.log(userData)
					if (userData.message) {
						dispatch(logoutUser())
						return true
					} else {
						dispatch(loginUser(userData))
						return userData
					}
				})
		}
	}
}

export const logoutUser = () => {
	localStorage.removeItem("token");
	return ({
		type: 'LOGOUT_USER'
	})
}

export const loginUser = userData => ({
	type: 'LOGIN_USER',
	userData
})