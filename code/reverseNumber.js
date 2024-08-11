// Reverse a number 12345 → 54321
// 123 → 321
// 123 → 3
// 12 -> 2
// 1

function reverseNumber(num) {
  let reversed = 0;
  if (num >= 0 && num < 10) {
    return num;
  }
  while (num !== 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversed;
}

console.log(reverseNumber(12345));

