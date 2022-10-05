function marathonDistance(d) {
	return d.reduce((acc, curVal) => acc + Math.abs(curVal), 0) === 25
}
