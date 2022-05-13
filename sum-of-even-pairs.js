function oddSum(numbers) {
	return numbers.slice(1)
 		.map((x, i) => (x + numbers[i]) % 2 === 0)
}
