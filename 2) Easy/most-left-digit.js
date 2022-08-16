function leftDigit(num) {
	return parseInt(num.substring(num.search(/\d/), num.search(/\d/) + 1))
}
