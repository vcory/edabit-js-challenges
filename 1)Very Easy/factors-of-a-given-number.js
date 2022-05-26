const findFactors = num =>[...Array(num + 1).keys()].filter(i=>num % i === 0);
