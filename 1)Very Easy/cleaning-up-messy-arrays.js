function cleanUpArray(arr) {
	return [arr.map(el => +el).filter(el => el % 2 === 0), arr.map(el => +el).filter(el => el % 2 !== 0)]
}
