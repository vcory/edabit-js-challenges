function formatBigInt(bigNumber, decimals) {
	const strNum = bigNumber.toString()
 	return `${strNum.slice(0, strNum.length - decimals)}.${strNum.slice(-decimals)}`
}
