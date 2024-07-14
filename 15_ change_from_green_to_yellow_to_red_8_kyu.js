//? Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to. For example, when the input is green, output should be yellow.


function updateLight(current) {
  if (current === 'green') {
    return 'yellow';
  }
  if (current === 'yellow') {
    return 'red';
  }
  if (current === 'red') {
    return 'green';
  }
}
console.log(updateLight('green'))
console.log(updateLight('yellow'))
console.log(updateLight('red'))
