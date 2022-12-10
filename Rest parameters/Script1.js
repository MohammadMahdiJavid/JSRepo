function max(...numbers) {
    console.log(typeof numbers);
    console.log(numbers.keys());
    console.log(Object.keys(numbers));
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}

console.log(max(4, 1, 9, -2));
// → 9

let numbers = [5, 1, 7, 2, 8, 3, 9, 4];
console.log(typeof numbers);
console.log(max(numbers));
// → -Infinity

console.log(max(...numbers));
// → 9

console.log(Object.keys(numbers));

console.log(max(2, ...numbers, ...[4, 50]));
