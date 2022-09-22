function secondLargest(arr) {
	return arr.sort((x, y) => x < y ? 1 : -1)[1]
}
