//? Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

const str1 = 'Hey fellow warriors';
const str2 = 'Hey';

function spinWords(string) {
  // let arr1 = string.split(" ")
  // let arr2 = string.split(" ").map(el => el.length < 5 ? el : el.split('').reverse().join('') )
  // return arr2.join(' ')
  return string
    .split(' ')
    .map((el) => (el.length < 5 ? el : el.split('').reverse().join('')))
    .join(' ');
}

console.log(spinWords(str1));
console.log(spinWords(str2));

console.log('-------------- Переворачиваем слова в строке ---------------');

const str3 = 'Hey fellow warriors';
console.log(str3);

const spinWords1 = (string) => {
  const arr = string.split(' '); // Разбиваем строку через пробел на массив слов
  console.log(arr); //  ['Hey', 'fellow', 'warriors']
  const arrReverse = arr.map((el) => el.split('').reverse().join(''));
  // Перебираем массив слов с помощью метода map и с помощью метода split каждый элемент (слово) массива разбиваем на массив сивмолволов, затем с помощью reverse переворачиваем слово меняя местами символы и с помощью метода loin снова преобразуем массив букв в строку, на выходе получая массив перевёрнутых слов
  console.log(arrReverse); //  ['yeH', 'wollef', 'sroirraw']
  console.log(arrReverse.join(' ')); // И с помощью join массив перевёрнутых слов преобразуем в строку слов через пробел
  // yeH wollef sroirraw
};

spinWords1(str1);