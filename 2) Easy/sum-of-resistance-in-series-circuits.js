function seriesResistance(arr) {
	const result = arr.reduce((acc, cur) => acc + cur, 0)
	return result <= 1 ? `${result} ohm` : `${result} ohms`
}
