function isSpecialArray(arr) {
	return arr.every((el, index) => el % 2 === index % 2)
}
