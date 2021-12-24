function areaShape(base, height, shape) {
	if (shape == "parallelogram") {
		return base * height
	} else if ( shape == "triangle") {
		return 0.5 * base * height
	} else return "Please try again!"
}