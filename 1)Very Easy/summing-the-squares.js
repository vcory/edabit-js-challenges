function squaresSum(n) {
	return (Array.from(new Array(n), (num, i) => (i + 1) ** 2)).reduce((acc, curVal) => acc + curVal)
}
