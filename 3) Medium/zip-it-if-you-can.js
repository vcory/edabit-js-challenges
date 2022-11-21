function zipIt(women, men) {
	if (women.length !== men.length) return "sizes don't match"
	
	return women.map((woman, i) => [woman, men[i]])
}
