// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = [];
  let counter = 0;

  while (counter < array.length) {
    chunked.push(array.slice(counter, counter + size));
    counter += size;
  }

  return chunked;
}

module.exports = chunk;

// function chunk(array, size) {
//   const chunked = [];
//   let chunk = [];
//   for (let element of array) {
//     const last = chunked[chunked.length - 1];

//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }

//   return chunked;
// }

// function chunk(array, size) {
//   const chunked = [];
//   let chunk = [];
//   array.forEach((num, i) => {
//     chunk.push(num);
//     if ((i + 1) % size === 0) {
//       chunked.push(chunk);
//       chunk = [];
//     }
//   });

//   if (chunk[0] !== undefined) {
//     chunked.push(chunk);
//   }

//   return chunked;
// }
