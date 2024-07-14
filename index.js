const squareDiv = document.getElementById('square');
const buttonElement = document.getElementById('change');

// Чтобы реагировать на нажатие кнопки, записываем функцию в свойство onclick.
// Эта функция будет вызываться при каждом нажатии на кнопку. Часто говорят,
// что эта функция обрабатывает событие
buttonElement.onclick = function () {
  squareDiv.style = `background-color: ${getColor()};`;
};

function getColor() {
  const colors = [
    '#49A16C',
    '#064236',
    '#ED6742',
    '#F498AD',
    '#1A5AD7',
    '#AFC9DA',
    '#FFD829',
    '#282A2E',
    '#5E6064',
    '#E6E6E6',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

console.log('------------------- TEST -------------------------');


