function reverseAndNot(i) {
	return parseInt(('' + i).split('').reverse().join('') + i)
}
