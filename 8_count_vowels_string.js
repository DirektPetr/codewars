//? Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y). The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  const string = str
    .toLowerCase()
    .trim()
    .split('')
    .filter(
      (el) => el === 'a' || el === 'e' || el === 'i' || el === 'o' || el === 'u'
    );
  console.log(string);
  return string.length;
}

console.log(getCount('Vowels Count Tests'));
