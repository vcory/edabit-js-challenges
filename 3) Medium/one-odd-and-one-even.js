function oneOddOneEven(n) {
	return n.toString().split('').some(num => num % 2 === 0) && n.toString().split('').some(num => num % 2 !== 0)
}
