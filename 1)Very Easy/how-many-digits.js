function sumDigits(n) {
	return Math.max(Math.floor(Math.log10(Math.abs(n))), 0) + 1
}
