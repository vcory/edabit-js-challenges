function pHName(pH) {
	return pH > 7 && pH <= 14 ? "alkaline" : pH < 7 && pH > 0 ? "acidic": pH == 7 ? "neutral" : "invalid" 
}
