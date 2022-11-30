function acceptedWords(arr) {
	return arr.filter(item => !item.match(/^[C]/))
}
