// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  str.split('').forEach((char) => {
    if (!charMap[char]) {
      charMap[char] = 0;
    }
    charMap[char]++;
  });

  let maxChar = '';
  let maxVal = 0;
  for (let key in charMap) {
    if (maxVal < charMap[key]) {
      maxChar = key;
      maxVal = charMap[key];
    }
  }
  return maxChar;
}

maxChar('aaabbbccccc');

module.exports = maxChar;
