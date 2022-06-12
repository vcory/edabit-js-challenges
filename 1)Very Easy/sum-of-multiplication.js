function multiSum(num, ten=10) {
		return Array.from(new Array(ten), (el, i) => (i + 1) * num)
 		.reduce((acc, curVal) => acc + curVal, 0)
}
