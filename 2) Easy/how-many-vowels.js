function countVowels(str) {
	const vowels = ['a', 'e', 'i', 'o','u']
	return str.split("").filter(letter => {
		return vowels.includes(letter);
	}).length;
}