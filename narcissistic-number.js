function isNarcissistic(n) {
	let x = 1, count = 0;
   while(n / x > 1){
      x *= 10;
      count++;
   };
   let sum = 0, temp = n;
   while(temp){
      sum += Math.pow(temp % 10, count);
      temp = Math.floor(temp / 10);
   };
   return sum === n;
}
