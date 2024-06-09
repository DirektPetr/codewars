//? Digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digitalRoot(n) {
  let sumNumber = n
    .toString()
    .split('')
    .reduce((a, с) => {
      return +a + +с;
    }, 0);
  console.log(sumNumber); // 49 --> 13 --> 4
  return sumNumber < 10 ? sumNumber : digitalRoot(sumNumber);
}
console.log(digitalRoot(12356791456)); // 4
