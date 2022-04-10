function sumFive(arr) {
	return arr.reduce((acc, cur) => acc + (cur > 5 ? cur: 0), 0)
}
