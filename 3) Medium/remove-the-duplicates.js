function removeDups(arr) {
	let a =  new Set(arr);
	let b = a.values();
		return Array.from(b);
}