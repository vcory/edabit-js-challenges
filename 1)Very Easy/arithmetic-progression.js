function arithmeticProgression(start, diff, n) {
	 return Array.from(new Array(n), () => start)
 		.map((el, i) => i > 0 ? el + (diff * i) : el)
 		.join(', ')
}
