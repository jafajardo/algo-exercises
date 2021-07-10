// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // Clean up both strings to remove punctuations and spaces.
  const string1 = stringA.replace(/[^\w]/g).toLowerCase();
  const string2 = stringB.replace(/[^\w]/g).toLowerCase();

  // Sort both strings
  const sortedString1 = string1.split('').sort().join('');
  const sortedString2 = string2.split('').sort().join('');

  // Compare both strings if they are equal
  return sortedString1 === sortedString2;
}

module.exports = anagrams;

// function buildCharMap(myString) {
//   const charMap = myString.split('').reduce((acc, char) => {
//     const map = acc;
//     if (!map[char]) {
//       map[char] = 0;
//     }
//     map[char]++;

//     return map;
//   }, {});

//   return charMap;
// }

// function anagrams(stringA, stringB) {
//   const string1 = stringA.replace(/[^\w]/g).toLowerCase();
//   const string2 = stringB.replace(/[^\w]/g).toLowerCase();

//   if (string1.length !== string2.length) {
//     return false;
//   }

//   const charMap1 = buildCharMap(string1);
//   const charMap2 = buildCharMap(string2);

//   let isAnagram = true;
//   for (let key in charMap1) {
//     if (charMap1[key] !== charMap2[key]) {
//       isAnagram = false;
//       break;
//     }
//   }
//   return isAnagram;
// }
