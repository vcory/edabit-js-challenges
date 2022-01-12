function longBurp(num) {
	let numOfR = "r";
	for (let i = 0; i < num - 1; i++){
		numOfR += numOfR[i];
	}return "Bu" + numOfR + "p";
}
