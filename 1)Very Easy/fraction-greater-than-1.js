function greaterThanOne(frac) {
	let [numerator, denominator] = frac.split("/");
	return Number(numerator) > Number(denominator);
}
