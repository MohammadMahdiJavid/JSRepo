// https://expressjs.com/en/guide/using-middleware.html
// https://www.npmjs.com/package/npmrc

const debug = require("debug")("app:startup");
const config = require("config");
const morgan = require("morgan");
const helmet = require("helmet");
const Joi = require("joi");
const logger = require("./middleware/logger");
const courses = require("./routes/courses");
const home = require("./routes/home");
const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", "./views"); // default

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // key=value&key=value --> req.body --> JSON
app.use(express.static("public")); // localhost:3000/readme.txt
app.use(helmet());
app.use(logger);

app.use("/api/courses", courses);
app.use("/", home);

// Configuration
console.log("Application Name: " + config.get("name"));
console.log("Mail Server: " + config.get("mail.host"));
console.log("Mail Password: " + config.get("mail.password"));

if (app.get("env") === "development") {
    app.use(morgan("tiny"));
    debug("Morgan enabled...");
}

// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log(`app: ${app.get("env")}`);
// ctrl + shift + P / O /
// ctrl + tab / ctrl + shift + tab
// ctrl + P --> go to file
// https://code.visualstudio.com/docs/getstarted/keybindings#_navigation
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
