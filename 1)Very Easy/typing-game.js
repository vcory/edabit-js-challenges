function correctStream(user, correct) {
	let arr = [];
	user.forEach((word1, index)=> {
		const word2 = correct[index];
		if (word1 === word2) {
			arr.push(1);
		} else if (word1 !== word2) {
			arr.push(-1)
		}
	})
	return arr;
}
