// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let capStr = '';
  str.split('').forEach((char, index) => {
    if (index === 0 || str[index - 1] === ' ') {
      capStr = `${capStr}${char.toUpperCase()}`;
    } else {
      capStr = `${capStr}${char}`;
    }
  });

  return capStr;
}

module.exports = capitalize;

// function capitalize(str) {
//   const words = [];

//   for (let word of str.split(' ')) {
//     words.push(`${word[0].toUpperCase()}${word.slice(1)}`);
//   }

//   return words.join(' ');
// }

// function capitalizeFirstWord(str) {
//   return `${str[0].toUpperCase()}${str.slice(1)}`;
// }

// function capitalize(str) {
//   return str.split(' ').reduce((acc, word, index) => {
//     return index === 0
//       ? `${acc}${capitalizeFirstWord(word)}`
//       : `${acc} ${capitalizeFirstWord(word)}`;
//   }, '');
// }
