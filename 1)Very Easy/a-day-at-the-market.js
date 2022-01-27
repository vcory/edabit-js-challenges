function whoWinsTonight(coins, space, price, size) {
	return Math.floor(coins/price) > Math.floor(space/size) ? "Bill"
	: Math.floor(coins/price) < Math.floor(space/size) ? "Will" 
	: "Tie";
}
