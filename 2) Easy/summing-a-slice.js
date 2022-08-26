function sliceSum(arr, n) {
	return arr.slice(0, n).reduce((x, y) => x + y, 0)
}
