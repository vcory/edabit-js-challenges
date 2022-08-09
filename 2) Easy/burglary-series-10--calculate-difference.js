function calculateDifference(obj, limit) {
	return Object.values(obj).reduce((acc, curVal) => acc + curVal, 0) - limit
}
