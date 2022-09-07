function cardHide(card) {
	return `${'*'.repeat(card.length - 4)}${card.substring(card.length - 4)}`
}
