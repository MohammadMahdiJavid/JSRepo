TwoD2Array = (array) => array.reduce((a, b) => a.concat(b), []);

let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]

console.log(TwoD2Array(arrays));

console.log(arrays.reduce((flat, current) => flat.concat(current), []));
// → [1, 2, 3, 4, 5, 6]
