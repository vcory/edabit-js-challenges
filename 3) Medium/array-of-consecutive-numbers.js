function getSequence(low, high) {
	return new Array(high - low + 1).fill(0).map((el, i) => i + low)
}
