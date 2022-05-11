function divisible(arr) {
	return arr.reduce((acc, currVal) => acc * currVal) % arr.reduce((acc, currVal) => acc + currVal) === 0
}
