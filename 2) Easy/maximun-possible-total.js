function maxTotal(nums) {
	return nums.sort((x, y) => x - y).slice(nums.length - 5).reduce((acc, curVal) => acc + curVal)
}
