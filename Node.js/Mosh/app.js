function sayHello(name) {
    console.log("TEST");
}

sayHello();

var sayHello = function () {
    console.log("TEST");
};
global.message = "test";
// console.log(console in global);
// console.log(sayHello in global);
console.log(Object.keys(global));
console.log("message" in global);
console.log("sayHello" in global);

console.log(require("./logger"));
var test = require("./logger");
