function operation(a, b, op) {
	const ops = {
		add: '+',
		subtract: '-',
		divide: '/',
		multiply: '*'
	}
	return parseInt(b) === 0 && op === 'divide' ? 'undefined' : eval(`${a} ${ops[op]} ${b}`)
}
