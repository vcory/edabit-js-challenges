function scoreCalculator(easy, med, hard) {
	return easy < 0 || med < 0 || hard < 0 ? 'invalid' : (easy * 5) + (med * 10) + (hard *20);
}
