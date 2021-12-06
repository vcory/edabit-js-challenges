function missingNum(arr) {
	let sorted = arr.sort(function (a, b) {
		return a-b})
	
	for (let i = 0;i <= sorted.length; i++){
		if (i+1 != sorted[i]){
			return i+1
			}
		}
	}