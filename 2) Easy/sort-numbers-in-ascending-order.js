function sortNumsAscending(arr) {
	return arr !== null ? arr.sort((x, y) => x > y ? 1 : -1) : []
}
