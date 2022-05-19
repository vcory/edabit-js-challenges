function countUppercase(str) {
	let sum=0
	for(let i=0; i<str.length; i++) {
		for (j=0; j<str[i].length;j++) {
			if(str[i][j] === str[i][j].toUpperCase()) {
				sum++
			}	
		}
	}
	return sum
}
