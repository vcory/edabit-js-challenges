function lettersOnly(str) {
	return str.split('').filter(letter => letter.match(/[a-z]/i) ? 1 : 0).join('')
}
