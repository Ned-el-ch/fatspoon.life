
export const validateNumbers = str => {
	let regex = /^[1-9]\d*(\.\d+)?$/;
	return str.match(regex) || str === "";
}