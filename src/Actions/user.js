export const userPostFetch = user => {
	return dispatch => {
		return fetch("http://localhost:3000/api/v1/users", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({user})
		})
			.then(res => res.json())
			.then(data => {
				if (data.jwt) {
					localStorage.setItem("token", data.jwt)
					dispatch(loginUser(data.user_data))
				} else {
					// ADD LOGIC TO HANDLE WRONG STUFF
				}
			})
	}
}

const loginUser = userData => ({
		type: 'LOGIN_USER',
		userData
})