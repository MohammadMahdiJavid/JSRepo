function func1() {}
console.log(Object.getPrototypeOf(func1) == Function.prototype);
// → true

console.log(Object.getPrototypeOf([]) == Array.prototype);
// → true

console.log(Object.getPrototypeOf({}) == Object.prototype);
