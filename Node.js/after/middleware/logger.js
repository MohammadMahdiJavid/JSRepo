// https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export

// console.log(require("../export-test"));

function log(req, res, next) {
    console.log("Logging...");
    next();
}

module.exports = log;
