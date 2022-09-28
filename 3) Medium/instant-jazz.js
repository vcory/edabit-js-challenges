function jazzify(arr) {
	return arr.map(item => item.indexOf('7') === -1 ? item + '7' : item) || []
}
