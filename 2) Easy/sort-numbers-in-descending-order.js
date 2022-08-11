function sortDescending(num) {
	return parseInt(num.toString().split('').sort((a,b) => a > b ? - 1 : 1).join(''))
}
