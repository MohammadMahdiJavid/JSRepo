const SCRIPTS = require("./scripts.js");

function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => count + (to - from), 0);
}

console.log(
    SCRIPTS.reduce((a, b) => {
        return characterCount(a) < characterCount(b) ? b : a;
    })
);
// → {name: "Han", …}

let biggest = null;
for (let script of SCRIPTS) {
    if (biggest == null || characterCount(biggest) < characterCount(script)) {
        biggest = script;
    }
}
console.log(biggest);
// → {name: "Han", …}
