import {loadIngredients} from "./ingredients"

export const userSignUpFetch = user => {
	return dispatch => {
		return fetch("http://localhost:4000/api/v1/users", {
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
		return fetch("http://localhost:4000/api/v1/login", {
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
					// returns false to setAlert(false)
					return userData.user_ingredients;
					// dispatch(loginUser(JSON.parse(data.user_data)))
				} else {
					// returns true to setAlert(true)
					return true;
				}
			})
	}
}

export const getProfileFetch = () => {
	return dispatch => {
		const token = localStorage.token;
		if (token) {
			return fetch("http://localhost:4000/api/v1/profile", {
				method: "GET",
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					'Authorization': `Bearer ${token}`
				}
			})
				.then(res => res.json())
				.then(data => {
					if (data.message) {
						// IF AN ERROR MESSAGE IS RECEIVED, CLEAR TOKEN
						localStorage.removeItem("token")
						return false;
					} else {
						dispatch({type: "LOGIN_USER", userData: data })
						return data.user_ingredients
					}
				})
		}
	}
}

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
})

const loginUser = userData => ({
		type: 'LOGIN_USER',
		userData
})