function createID(firstname, lastname) {
	return `${firstname[0].toLowerCase()}${lastname[0].toUpperCase()}${lastname.substring(1,3).toLowerCase()}`;
}
