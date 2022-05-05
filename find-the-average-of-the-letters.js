function averageIndex(arr) {
	return +(arr.reduce((acc, curVal) => acc + curVal.charCodeAt() - 96, 0) / arr.length)
 		.toFixed(2)
}	
