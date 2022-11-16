function isTriplet(n1, n2, n3) {
	const arr = [n1, n2, n3].sort((x, y) => x < y ? -1 : 1)
 	return Math.pow(arr[0], 2) + Math.pow(arr[1], 2) === Math.pow(arr[2], 2)
}
