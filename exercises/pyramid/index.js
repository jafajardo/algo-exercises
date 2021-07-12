// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//         12345
//       1'  #  '
//       2' ### '
//       3'#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n) {
  const colCount = n + (n - 1);

  for (let row = 1; row <= n; row++) {
    let layer = '';
    for (let col = 1; col <= colCount; col++) {
      let gap = n - row;
      if (col <= gap || col > colCount - gap) {
        layer += ' ';
      } else {
        layer += '#';
      }
    }
    console.log(layer);
  }
}

module.exports = pyramid;
