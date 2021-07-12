// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let row = 1; row <= n; row++) {
    let rowStr = '';
    for (let col = 1; col <= n; col++) {
      col <= row ? (rowStr += '#') : (rowStr += ' ');
    }
    console.log(rowStr);
  }
}

module.exports = steps;

// function patternBuilder(n, pattern) {
//   let str = '';
//   for (let i = 1; i <= n; i++) {
//     str += pattern;
//   }

//   return str;
// }

// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(`${patternBuilder(i, '#')}${patternBuilder(n - i, ' ')}`);
//   }
// }
