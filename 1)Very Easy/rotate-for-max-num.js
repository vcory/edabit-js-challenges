function rotateMaxNumber(num) {
	return +[...num + ''].sort ((x, y) => y - x).join('')
}
