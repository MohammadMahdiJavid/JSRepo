let objectA = { a: 1, b: 2 };
Object.assign(objectA, { b: 3, c: 4 });
console.log(objectA);
// → {a: 1, b: 3, c: 4}

objectB = { b: 4, c: 5 };
Object.assign(objectA, objectB);
console.log(objectA);
// → {a: 1, b: 3, c: 4}
