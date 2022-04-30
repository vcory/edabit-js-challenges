function justAnotherSumProblem(a, b) {
	const [min,max] = [Math.min(a, b), Math.max(a, b)]
	return (min + max) / 2 * (max - min + 1)
}
