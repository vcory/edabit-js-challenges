function getOnlyEvens(nums) {
 return nums.filter((num, i) => num % 2 === 0 && i % 2 === 0)
}
