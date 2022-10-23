function profit(info) {
	return Math.round((info.sellPrice - info.costPrice) * info.inventory)
}
