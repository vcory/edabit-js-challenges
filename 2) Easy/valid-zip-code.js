function isValid(zip) {
	return zip.length <= 5 ? /^\d+$/.test(zip) : false
}
