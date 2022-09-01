function addNums(nums) {
	return nums.split(',').reduce((acc, curVal) => acc + (+curVal), 0)
}
