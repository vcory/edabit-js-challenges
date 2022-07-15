function charCount(myChar, str) {
	return str.split('').filter((x) => myChar === x ? 1 : 0).length
}
