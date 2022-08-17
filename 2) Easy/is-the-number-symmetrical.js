function isSymmetrical(num) {
	return num === Number(num.toString().split('').reverse().join(''))
}
