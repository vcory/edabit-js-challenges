function lastDig(a, b, c) {
	return ((a % 10) * ( b % 10)) % 10 === c % 10
}
