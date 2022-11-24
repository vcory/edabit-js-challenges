function neutralise(s1, s2) {
	return [...s1].map((el, i) => el === [...s2][i] ? el : 0).join('')
}
