function otherSides(length) {
	return [length*2, + ((length * Math.sqrt(3)).toFixed(2))]	
}


Test.assertSimilar(otherSides(1), [2, 1.73])
Test.assertSimilar(otherSides(2), [4, 3.46])
Test.assertSimilar(otherSides(3), [6, 5.2])
Test.assertSimilar(otherSides(7), [14, 12.12])
