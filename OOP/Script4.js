let empty = {};

console.log(empty.toString);
// → function toString()…{}

console.log(empty.toString());
// → [object Object]

console.log(Object.getPrototypeOf({}) == Object.prototype);
// → true

console.log(Object.getPrototypeOf(Object.prototype));
// → null

console.log(Object.prototype.isPrototypeOf(empty));
// → true

console.log(Object.getPrototypeOf(empty));
console.log(typeof Object.getPrototypeOf(empty));
