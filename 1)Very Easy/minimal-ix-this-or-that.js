function firstOne(a, b = 0, c = 0, d = 0) {
	return a || b || c || d || "not found";
}
