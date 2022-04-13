function keyboardMistakes(str) {
	return str.replace(/\d/g,n => ({ 4: 'A', 5: 'S', 0: 'O', 1: 'I' })[n]) 
}
