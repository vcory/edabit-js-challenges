function millionsRounding(arr) {
	return arr.map(x => [x[0], +(Math.round(x[1] / 1_000_000) + '000000')])
}
