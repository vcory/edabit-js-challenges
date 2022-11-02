function inBox(arr) {
 	return arr.some(x => x.search(/\s*\*\s*/) > -1)
}
