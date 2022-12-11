const toStringSymbol = Symbol("toString");

Array.prototype[toStringSymbol] = function () {
    return `${this.length} cm of blue yarn`;
};

console.log([1, 2].toString());
// → 1,2

console.log([1, 2][toStringSymbol]());
// → 2 cm of blue yarn

let stringObject = {
    [toStringSymbol]() {
        return "a jute rope";
    },
};

console.log(stringObject[toStringSymbol]());
// → a jute rope
