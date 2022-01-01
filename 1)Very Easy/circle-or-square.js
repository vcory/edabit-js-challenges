function circle_or_square(rad, area){
	if ((2 * 3.14 * rad) > Math.sqrt(area) * 4) {
		return true
	} else {
		return false
	}
}
