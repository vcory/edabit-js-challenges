function trace(arr) {
	var x = 0;
 	for (var i=0; i<arr.length; i++) {
 		x += arr[i][i]
 	}

 	return x;
}
