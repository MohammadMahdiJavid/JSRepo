function normalize() {
    console.log(this.coords.map((n) => n / this.length));
}

let obj = { coords: [0, 2, 3], length: 5 };
normalize.call(obj);
// → [0, 0.4, 0.6]

console.log(Object.prototype.hasOwnProperty.call(obj, "coords"));
console.log(Object.keys(obj));
