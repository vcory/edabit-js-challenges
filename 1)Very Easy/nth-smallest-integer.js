function nthSmallest(arr, n) {
	return n > arr.length ? null : arr.sort()[n - 1]
}
