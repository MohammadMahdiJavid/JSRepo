// https://expressjs.com/en/4x/api.html

const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
    // res.render("index", { title: "My Express App", message: "Hello" });
});

// app.post();
// app.put();
// app.post();

app.listen(3000, () => console.log("Listening on port 3000..."));
