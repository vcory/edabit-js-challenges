function detectBrowser(userAgent) {
	return (userAgent.indexOf('Trident') > -1 || userAgent.indexOf('MSIE') > -1 || userAgent.indexOf('Microsoft Internet Explorer')  > -1) ? 'Internet Explorer' : userAgent.indexOf('Firefox') > -1 ? 'Mozilla Firefox' : 'Google Chrome'
}
