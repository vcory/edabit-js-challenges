function changeEnough(change, amountDue) {
	const [q, d, n, p] = change
	return amountDue <= (q*.25) + (d * .1) + (n *0.05) + (p*0.01)
}