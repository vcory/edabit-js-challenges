function dartsScoring(x, y) {
	return Math.hypot(x, y) > 10 ? 0 : Math.hypot(x, y) > 5 ? 1 : Math.hypot(x, y) > 1 ? 5 : 10;
}
