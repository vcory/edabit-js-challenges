function asterisk(string) {
	const regex = RegExp(/^a\w+c/, 'g');
	return regex.test(string);
}
