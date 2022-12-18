function factory(num) {
	return function(arr) {
		return arr.map(number => number / num)
	}
}
