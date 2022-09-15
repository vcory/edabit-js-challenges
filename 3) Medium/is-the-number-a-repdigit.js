function isRepdigit(num) {
	return num < 0 ? false : num === true ? true : num.toString() === num.toString()[0].repeat(num.toString().length)
}
