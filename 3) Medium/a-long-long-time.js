function longestTime(h, m, s) {
	let arr = [h* 3600, m * 60, s]
 	return arguments[arr.indexOf(Math.max(...arr))]
}
