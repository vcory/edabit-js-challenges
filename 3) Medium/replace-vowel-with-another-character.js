function replaceVowel(word) {
	const vowels = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5}
	return [...word].map(i => i in vowels ? vowels[i] : i).join('')
}
