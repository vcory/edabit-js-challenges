function filterArray(arr) {
	return arr.filter (x => Number.isInteger(x))
}


Test.assertSimilar(filterArray([1, 2, 3, "a", "b", 4]), [1, 2, 3, 4])
Test.assertSimilar(filterArray(["A", 1, "&amp", 0, -9, "Edabit"]), [1, 0, -9])
Test.assertSimilar(filterArray(["Nothing", "here"]),[])
Test.assertSimilar(filterArray([1, 2, 3, 3.5 , "a", "b", 4 , 5.8 , 6]), [1, 2, 3, 4 , 6])
