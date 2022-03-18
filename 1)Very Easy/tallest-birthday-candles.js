function birthdayCakeCandles(candles) {
	return candles.filter(x => x >= Math.max(...candles)).length
}   
