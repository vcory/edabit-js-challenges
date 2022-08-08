function convertToDecimal(perc) {
	return perc.map((nun) => parseFloat(nun.split('%')[0] / 100))
}
