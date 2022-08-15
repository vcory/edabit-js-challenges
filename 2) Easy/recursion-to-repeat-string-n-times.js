function repetition(txt, n) {
	return n > 1 ? repetition(txt, n -1) + txt: txt
}
