// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  debugger;
  return str
    .split('')
    .reduce((reversed, character) => character + reversed, '');
}

reverse('hello');

module.exports = reverse;

// function reverse(str) {
//   return [...str].reverse().join('');
// }

// function reverse(str) {
//   let arr = '';
//   for (let char of str) {
//     arr = char + arr;
//   }
//   return arr;
// }
