export const uuid = () => {
	let table = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("")
	let arr = [];
	for (let i = 0; i < 12; i++) {
		arr[i] = table[Math.floor(Math.random() * table.length - 1)]
	}
	return arr.join('');
}