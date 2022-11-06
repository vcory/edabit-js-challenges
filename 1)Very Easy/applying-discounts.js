function getDiscounts(nums, d) {
	return nums.map(num => (parseInt(d.split('%')[0])/100) * num)
}
