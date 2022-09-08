function freeShipping(order) {
	return Object.values(order)
 		.reduce((acc, cur) => acc + cur, 0) > 50
}
