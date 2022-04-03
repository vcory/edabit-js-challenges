function removeNumbers(str) {
	return str.split('').filter(c => isNaN(c)).join('');
}
