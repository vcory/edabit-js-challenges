function showdown(p1, p2) {
	return p1.indexOf('B') === p2.indexOf('B') ? 'tie' : p1.indexOf('B') > p2.indexOf('B') ? 'p2' : 'p1'
}
