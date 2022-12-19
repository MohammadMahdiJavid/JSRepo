const EventEmitter = require("events");

class Logger extends EventEmitter {
    constructor() {
        this.logs = [];
    }
    log(message) {
        // method inside a class
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        console.log(`${timestamp} - ${message}`);
        this.emit("messageLogged", { id: 1, url: "http://" });
    }
}

module.exports = Logger;
