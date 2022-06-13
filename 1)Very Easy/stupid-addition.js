function stupidAddition(a, b) {
	return (typeof(a) === 'string' && typeof(b) === 'string') ? parseInt(a)
		+ parseInt(b) : (typeof(a) === 'number' && typeof(b) === 'number') ? a + '' + b : null
}
