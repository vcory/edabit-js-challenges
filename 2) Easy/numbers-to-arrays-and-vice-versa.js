function toArray(num) {
	return num.toString().split('').map(Number)
}

function toNumber(arr) {
	return parseInt(arr.join(''))
}
