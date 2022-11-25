    function mean(num) {
	const arr = ('' + num).split('')
	return arr.reduce((acc, cur) => acc + (+cur), 0) / arr.length
}
