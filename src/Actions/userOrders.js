// const API_URL = "https://ancient-harbor-35585.herokuapp.com"
const API_URL = "http://localhost:6900"

export const addOrderFetch = (order) => {

	let token = localStorage.token;
	if (token) {
		return dispatch => {
			return fetch(`${API_URL}/api/orders`, {
					method: "POST",
					headers: {
						'Content-Type': 'application/json',
						'Accept': 'application/json',
						'Authorization': `Bearer ${token}`
					},
					body: JSON.stringify({
						recipe: order.recipe,
						plannedDate: order.plannedDate,
						multiplier: order.multiplier,
						address: order.address
					})
				})
				.then(res => res.json())
				.then(console.log)
		}
	}
}

export const updateOrderFetch = (order) => {

	let token = localStorage.token;
	if (token) {
		return dispatch => {
			return fetch(`${API_URL}/api/orders/${order._id}`, {
					method: "PUT",
					headers: {
						'Content-Type': 'application/json',
						'Accept': 'application/json',
						'Authorization': `Bearer ${token}`
					},
					body: JSON.stringify({
						recipe: order.recipe,
						plannedDate: order.plannedDate,
						multiplier: order.multiplier,
						address: order.address,
						completed: order.completed
					})
				})
				.then(res => res.json())
				.then(console.log)
		}
	}
}

export const deleteOrderFetch = (order) => {

	let token = localStorage.token;
	if (token) {
		return dispatch => {
			return fetch(`${API_URL}/api/orders/${order._id}`, {
					method: "DELETE",
					headers: {
						'Content-Type': 'application/json',
						'Accept': 'application/json',
						'Authorization': `Bearer ${token}`
					}
				})
				.then(res => res.json())
				.then(console.log)
		}
	}
}

export const getOrdersFetch = (weekBeginDate, weekEndDate) => {
	console.log(weekBeginDate, weekEndDate)
	let token = localStorage.token;
	if (token) {
		return dispatch => {
			return fetch(`${API_URL}/api/orders?startdate=${weekBeginDate}&enddate=${weekEndDate}`, {
					method: "GET",
					headers: {
						'Content-Type': 'application/json',
						'Accept': 'application/json',
						'Authorization': `Bearer ${token}`
					}
				})
				.then(res => res.json())
				.then(res => {
					return false
				})
		}
	}
}

export const addOrder = (order) => {
	return ({
		type: "ADD_ORDER",
		order
	})
}

export const updateOrder = (order) => {
	return ({
		type: "UPDATE_ORDER",
		order
	})
}

export const deleteOrder = (order) => {
	return ({
		type: "DELETE_ORDER",
		order
	})
}

export const loadOrders = (orders) => {
	return ({
		type: "LOAD_ORDERS",
		orders
	})
}