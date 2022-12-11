class Rabbit {
    constructor() {}
}
Rabbit.prototype.teeth = "small";
let killerRabbit = new Rabbit();

console.log(Object.getPrototypeOf(killerRabbit));
// → Rabbit {teeth: "small"}

console.log(killerRabbit.teeth);
// → small

killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
// → long, sharp, and bloody

console.log(Rabbit.prototype.teeth);
// → small

console.log(Object.getPrototypeOf(Rabbit));
// → [Function]

console.log(Object.getPrototypeOf(Rabbit.prototype));
// → {}

console.log(Object.keys(killerRabbit));
// → ['teeth']

console.log(Object.keys(Object.getPrototypeOf(killerRabbit)));
// → ['teeth']

console.log(Object.getPrototypeOf(killerRabbit) == Rabbit.prototype);
// → true

console.log(Rabbit.prototype);
// → Rabbit {teeth: "small"}

console.log();

console.log(Object.getPrototypeOf(killerRabbit) == Rabbit);
// → false

console.log(
    Object.keys(Object.getPrototypeOf(Object.getPrototypeOf(killerRabbit)))
);
// → []
