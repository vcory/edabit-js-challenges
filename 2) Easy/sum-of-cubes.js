function sumOfCubes(nums) {
	return nums.length === 0 ? 0 : nums.map(num =>
		Math.pow(num, 3)).reduce((acc, currentVal) => currentVal + acc)
}
