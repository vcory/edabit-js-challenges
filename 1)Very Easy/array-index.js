function arrIndex(arr, idx) {
	 return arr.flat()
		.filter((el, i) => idx.indexOf(i + 1) > -1)
		.join('')
}
