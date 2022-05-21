function uploadCount(dates, month) {
	return dates.filter(x => x.indexOf(month) > -1).length
}
