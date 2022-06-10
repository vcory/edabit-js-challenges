function largestNumbers(n, arr) {
	return arr.sort((x, y) => y - x).filter((el, i) => i + 1 <= n).sort((x, y) => x - y)
}
