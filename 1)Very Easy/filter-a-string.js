function filterString(txt) {
	return [/[A-Z]/, /[a-z]/, /\d/, /[\W]/].map(r => txt.split(r).length - 1)
}
