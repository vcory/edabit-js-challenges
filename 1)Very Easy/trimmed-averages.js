function trimmedAverages(arr) {
	const newArr = arr.sort((x, y) => x - y).slice(1, arr.length - 1)
	return Math.round(newArr.reduce((acc, curr) => acc + curr, 0) / newArr.length)
}
