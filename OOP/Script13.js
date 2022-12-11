let ages = new Map();

ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);

console.log(`Júlia is ${ages.get("Júlia")}`);
// → Júlia is 62

console.log("Is Jack's age known?", ages.has("Jack"));
// → Is Jack's age known? false

console.log(ages.has("toString"));
// → false

console.log(Object.keys(ages));
// → []

console.log(ages.keys());
// → MapIterator {"Boris", "Liang", "Júlia"}

let prototype = Object.getPrototypeOf(ages);

console.log(prototype);
// → Map {}

console.log("keys" in prototype);
// → true

console.log("keys" in ages);
// → true

console.log(ages.hasOwnProperty("keys"));
// → false

console.log(prototype.hasOwnProperty("keys"));
// → true

console.log({ x: 1 }.hasOwnProperty("x"));
// → true
console.log({ x: 1 }.hasOwnProperty("toString"));
// → false
