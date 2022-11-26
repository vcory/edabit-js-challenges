function maskify(str) {
	return str.length <= 4 ? str : str.split('').map((c, i) => i < str.length - 4 ? '#' : c).join('')
}
