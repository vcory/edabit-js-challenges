function getCase(str) {
	return str.toLowerCase() === str ? 'lower' : str.toUpperCase() === str ? 'upper' : 'mixed'
}
