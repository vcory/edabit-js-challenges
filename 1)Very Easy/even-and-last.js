function evenLast(arr) {
	return arr.reduce((acc, curVal, i) => i % 2 === 0 ? acc + (curVal * arr[arr.length - 1]) : acc + 0, 0)
}
