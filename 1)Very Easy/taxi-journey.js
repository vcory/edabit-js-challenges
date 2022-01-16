 function journeyDistance(num) {
	return num === 3 ? 1 : num === 0 ? 0: num > 3 && (num - 3) / 2 + 1;
}
