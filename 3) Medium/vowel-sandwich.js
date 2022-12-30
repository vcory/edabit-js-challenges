function isVowelSandwich(str) {
	return /^[^aeiou][aeiou][^aeiou]$/.test(str)
}
