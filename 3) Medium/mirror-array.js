function mirror(arr) {
	return arr.concat(arr.slice(0, arr.length - 1).reverse())
}
