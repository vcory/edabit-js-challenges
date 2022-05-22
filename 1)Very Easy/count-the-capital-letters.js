function capitalLetters(str) {
	let matched = str.match(/[A-Z]/g)
	return matched == null ? 0 : matched.length;
}
