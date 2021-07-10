// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str.split('').every((char, index) => {
    return char === str[str.length - 1 - index];
  });
}

palindrome('fish');

module.exports = palindrome;

// function palindrome(str) {
//   let counter = 0;
//   while (counter <= str.length - 1) {
//     if (!(str[counter] === str[str.length - 1 - counter])) {
//       return false;
//     }
//     counter++;
//   }

//   return true;
// }

// function palindrome(str) {
//   const reversedStr = str.split('').reduce((acc, char) => {
//     return `${char}${acc}`;
//   }, '');

//   return str === reversedStr;
// }

// function palindrome(str) {
//   const reversedStr = str.split('').reverse().join('');
//   return str === reversedStr;
// }

// function palindrome(str) {
//   let reversedStr = '';
//   for (let char of str) {
//     reversedStr = char + reversedStr;
//   }

//   return str === reversedStr;
// }
