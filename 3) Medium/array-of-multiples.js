function arrayOfMultiples (num, length) {
	return Array.from(new Array(length), (idx, item) => (item + 1) * num)
}
