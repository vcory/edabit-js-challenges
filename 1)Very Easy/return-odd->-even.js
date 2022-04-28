function oddeven(arr) {
	return arr.filter(x => x % 2 !== 0).length > arr.filter(x => x % 2 === 0).length
}
