function log(msg) {
    console.log(msg);
}

console.log(typeof module.exports);
module.exports.log = log;
