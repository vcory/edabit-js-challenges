function distanceHome(arr) {
	return Math.abs(arr.reduce((prevVal, curVal) => prevVal + curVal, 0))
}
