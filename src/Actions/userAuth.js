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
					let user = {
						username: data.userData.username,
						_id: data.userData._id
					}
					dispatch(loginUser(user))
					dispatch({
						type: "LOAD_ORDERS",
						orders: data.userData.orders
					})
					dispatch({
						type: "LOAD_RECIPES",
						recipes: data.userData.recipes
					})
					dispatch({
						type: "LOAD_USER_INGREDIENTS",
						userIngredients: data.userData.userIngredients
					})
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
			.then(data => {
				debugger
				if (data.token) {
					localStorage.setItem("token", data.token)
					let user = {
						username: data.userData.username,
						_id: data.userData._id
					}
					dispatch(loginUser(user))
					dispatch({
						type: "LOAD_ORDERS",
						orders: data.userData.orders
					})
					dispatch({
						type: "LOAD_RECIPES",
						recipes: data.userData.recipes
					})
					dispatch({
						type: "LOAD_USER_INGREDIENTS",
						userIngredients: data.userData.userIngredients
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
			.then(data => {
				console.log(data.userData)
				if (data.success) {
					let user = {
						username: data.userData.username,
						_id: data.userData._id
					}
					dispatch(loginUser(user))
					dispatch({
						type: "LOAD_ORDERS",
						orders: data.userData.orders
					})
					dispatch({
						type: "LOAD_RECIPES",
						recipes: data.userData.recipes
					})
					dispatch({
						type: "LOAD_USER_INGREDIENTS",
						userIngredients: data.userData.userIngredients
					})
				} else {
					dispatch(logoutUser())
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