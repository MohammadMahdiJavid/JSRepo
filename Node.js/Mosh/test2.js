const os = require("os");

console.log(os.uptime());
console.log(os.freemem() / 2 ** 30);
