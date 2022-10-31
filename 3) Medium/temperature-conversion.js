function tempConversion(celsius) {
	let result = [+(celsius*9/5 +32).toFixed(2), +(celsius + 273.15).toFixed(2)]
	return result[1] < 0 ? 'Invalid' : result
}
