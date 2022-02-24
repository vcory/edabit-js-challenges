function evenOrOdd(arr) {
	return arr.reduce((acc, curVal) => acc + curVal, 0) % 2 === 0 ? 'even' : 'odd'
}
