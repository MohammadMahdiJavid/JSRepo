let protoRabbit = {
    speak() {
        console.log(`The ${this.type} rabbit says '${"SKREEE!"}' ${this.name}`);
    },
    name: "Proto Rabbit",
};

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.name = "Killer Rabbit";

killerRabbit.speak();
// → The killer rabbit says 'SKREEEE!' Killer Rabbit

console.log(typeof killerRabbit);
// → object

console.log(Object.getPrototypeOf(killerRabbit) == protoRabbit);
// → true

console.log(Object.getPrototypeOf(protoRabbit) == Object.prototype);
// → true

console.log(Object.getPrototypeOf(killerRabbit));
// → {speak: ƒ, name: "Proto Rabbit"}
