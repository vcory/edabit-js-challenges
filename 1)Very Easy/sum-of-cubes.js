function sumCubes(n) {
	var sum = 0;

  for (var i = 1; i <= n; i++) {
    sum += Math.pow(i, 3);
  }
  return sum;
}
