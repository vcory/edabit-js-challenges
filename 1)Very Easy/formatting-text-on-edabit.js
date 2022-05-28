function mdFormat(word, style) {
	return (style === 'b' ? '**' : style === 'i' ? '_' : style === 's' ? '~~' : '\`') + word + (style === 'b' ? '**' : style === 'i' ? '_' : style === 's' ? '~~' : '\`')
}
