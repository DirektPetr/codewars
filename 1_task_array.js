//? Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

const arr1 = [1, -8, 14, -44, 99, 7, 4];

function invert(array) {
  return array.map((el) => el * -1);
}

console.log(invert(arr1)); // [-1, 8, -14, 44, -99, -7, -4]
