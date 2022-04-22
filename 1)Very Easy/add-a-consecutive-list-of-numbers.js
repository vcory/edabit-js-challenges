function addUpTo(n) {
	return n === 0 ? 0 : Array.from(new Array(n), (i, n) => n + 1).reduce((acc, curVal) => curVal + acc)
}
