function deNest(arr) {
	return JSON.parse(JSON.stringify(arr).replace(/\[|\]/g, ''))
}
