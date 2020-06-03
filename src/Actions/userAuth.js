// const API_URL = "https://ancient-harbor-35585.herokuapp.com"
const API_URL = "http://localhost:6900"

export const userSignUpFetch = (username, password) => {
	return dispatch => {
		return fetch(`${API_URL}/api/users/signup`, {
				method: "POST",
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
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
					return true
				} else {
					return false
				}
			})
	}
}

export const userLoginFetch = (username, password) => {
	// console.log(username, password)
	return dispatch => {
		return fetch(`${API_URL}/api/users/login`, {
				method: "POST",
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: JSON.stringify({
					username,
					password
				})
			})
			.then(res => res.json())
			.then(userData => {
				debugger
				if (userData.token) {
					localStorage.setItem("token", userData.token)
					dispatch({
						type: "LOGIN_USER",
						userData
					})
					return true;
				} else {
					return false;
				}
			})
	}
}

export const userProfileFetch = () => {
	let token = localStorage.getItem('token')
	return dispatch => {
		return fetch(`${API_URL}/api/users/profile`, {
			method: "GET",
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
		.then(data => data.json())
		.then(userData => {
			console.log(userData)
			if (userData.error) {
				dispatch(logoutUser())
			} else {
				dispatch(loginUser(userData))
			}
		})
		.catch(console.log)
	}
}

export const logoutUser = () => {
	localStorage.removeItem('token');
	return ({
		type: 'LOGOUT_USER'
	})
}

export const loginUser = userData => ({
	type: 'LOGIN_USER',
	userData
})