const EventEmitter = require("events");

const emitter = new EventEmitter();

// Register a listener
emitter.addListener("messageLogged", function (arg) {
    console.log("Listener called1", arg);
    console.log();
});

emitter.on("messageLogged", function (...arg) {
    console.log("Listener called2", arg);
    console.log("Listener called2", ...arg);
    console.log();
});

emitter.on("messageLogged", (arg) => {});

// emit : making a noise, produce something
// Raise an event
emitter.emit("messageLogged", { id: 1, url: "http://" }); // best practice to pass an object
emitter.emit("messageLogged", 1, "url");
