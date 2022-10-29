function getBudgets(arr) {
	return arr.reduce((acc, currVal) => acc + currVal.budget, 0)
}
