function amplify(num) {
	return Array.from(new Array(num), (num, index) => index + 1).map(num => num % 4 === 0 ? num * 10 : num)
}
