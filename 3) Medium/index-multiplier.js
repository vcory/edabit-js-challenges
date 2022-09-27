function indexMultiplier(arr) {
	return arr.reduce((acc, curVal, ind) => acc + (curVal * ind),0)
}
