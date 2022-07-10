function filterArray(arr) {
	return arr.filter(item => typeof item === 'string' ? 0 : 1)
}
