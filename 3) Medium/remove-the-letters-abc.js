function removeABC(str) {
	return str.match(/[abc]/gi) ? str.replace(/[abc]/gi, '') : null
}
