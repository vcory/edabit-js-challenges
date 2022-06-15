function unlucky13(nums) {
  return nums.filter(function (x) {
		return (x % 13 !== 0)})
}
