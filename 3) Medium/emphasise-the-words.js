function emphasise(str) {
	return str.toLowerCase().replace(/\b./g, m => m.toUpperCase());
}
