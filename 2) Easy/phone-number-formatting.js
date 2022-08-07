function formatPhoneNumber(numbers) {
  return `(${numbers.join('').substring(0, 3)}) ${numbers.join('').substring(3, 6)}-${numbers.join('').substring(6)}`
 }
