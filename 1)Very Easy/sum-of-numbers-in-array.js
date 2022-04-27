function arraySum(nums) {
	return +nums.reduce((acc, cur) => acc + cur ** (cur % 2 ? .5 : 2), 0).toFixed(2)
}
