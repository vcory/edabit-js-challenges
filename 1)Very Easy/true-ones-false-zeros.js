function integerBoolean(n) {
	return n.split('').map(int => int === '0' ? false : true)
}
