function filterDigitLength(arr, num) {
	return arr.filter(x => x.toString().length === num ? 1 : 0)
}
