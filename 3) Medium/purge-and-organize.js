function uniqueSort(arr) {
	return Array.from(new Set(arr.sort((x, y) => x > y ? 1 : -1)))
}
