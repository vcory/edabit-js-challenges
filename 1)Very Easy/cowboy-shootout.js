function rogerShots(arr) {
	return arr.filter ( x => x === "Bang!" || x === "BangBang!").length * 0.5;
}
