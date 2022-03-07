function findDifference(a, b) {
	return Math.abs(a.reduce((acc, curVal) => acc * curVal) - b.reduce((acc, curVal) => acc * curVal));
}
