function calculateLosses(obj) {
	return Object.values(obj).length > 0 ? Object.values(obj).reduce((acc, curVal) => acc + curVal, 0) : 'Lucky you!'
}
