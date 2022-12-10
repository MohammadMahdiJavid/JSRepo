// import SCRITPS from SCRIPTS.js
const SCRIPTS = require("./SCRIPTS.js");

function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

console.log(filter(SCRIPTS, (script) => script.living));
// → [{name: "Adlam", …}, …]

console.log(SCRIPTS.filter((s) => s.direction == "ttb"));
// → [{name: "Mongolian", …}, …]
