function sortDrinkByPrice(drinks) {
	return drinks.sort((a,b) => a.price < b.price ? -1 : 1)
}
