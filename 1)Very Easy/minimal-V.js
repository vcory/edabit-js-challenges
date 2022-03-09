function notShare(arr1, arr2) {
	return arr1.every(a => !arr2.includes(a));
}
