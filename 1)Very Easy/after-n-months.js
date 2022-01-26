function afterNMonths(year, months) {
	return year == undefined ? 'year missing' : months == undefined ? 'month missing' : Math.floor(year + (months/12));
}
