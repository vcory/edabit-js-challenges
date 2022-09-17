function oddishOrEvenish(num) {
	return num.toString().split('').map(item => parseInt(item)).reduce((acc, curval) => acc + curval, 0) % 2 === 0 ? 'Evenish' : 'Oddish'
}
