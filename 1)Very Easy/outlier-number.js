function outlierNumber(arr) {
	return arr.filter(x => x % 2 === 0).length === 1 ? 
	arr.filter(x => x % 2 === 0)[0] : arr.filter(x => x % 2 !== 0)[0];
}
