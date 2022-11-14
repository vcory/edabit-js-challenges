function findNaN(number) {
	return number.findIndex((x) => isNaN(x))
}
