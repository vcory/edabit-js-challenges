function findNemo(sentence) {
	return sentence.split(' ').indexOf('Nemo') > -1 ? `I found Nemo at ${sentence.split(' ').indexOf('Nemo') + 1}!` : 'I can\'t find Nemo :('
}
