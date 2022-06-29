function calculator(num1, operator, num2) {
	return operator === '/' && num2 === 0 ? 'Can\'t divide by 0!' : eval(`${num1}${operator}${num2}`)
}
