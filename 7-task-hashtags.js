//? The marketing team is spending way too much time typing in hashtags. Let's help them with our own Hashtag Generator! Here's the deal: It must start with a hashtag (#). All words must have their first letter capitalized. If the final result is longer than 140 chars it must return false. If the input or the result is an empty string it must return false.

function evenOrOdd1(string) {
  if (string.trim() === '') return false;

  const str1 = string
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  const str2 = `#${str1.trim()}`;

  return str2.length > 140 ? false : str2;
}

console.log(evenOrOdd1('Do We have A Hashtag')); //  #DoWeHaveAHashtag
console.log(evenOrOdd1('a'.repeat(139), '#A' + 'a'.repeat(138), 'Should work')); //  #Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
