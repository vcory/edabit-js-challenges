function ascDesNone(arr, str) {
	return str == 'Asc' ? arr.sort((a, b) => a - b) :
		str == 'Des' ? arr.sort((a, b) => b - a) :
		arr
}
