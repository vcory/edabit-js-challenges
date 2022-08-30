function getDecimalPlaces(num) {
	return num.indexOf('.') === -1 ? 0 : num.split('.')[1].length
}
