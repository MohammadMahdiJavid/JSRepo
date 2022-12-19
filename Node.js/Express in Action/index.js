// https://expressjs.com/en/4x/api.html

const express = require("express"); // returning function
const Joi = require("joi"); // returning Class

const app = express();

// adding middleware // using middleware in request processing pipeline
app.use(express.json()); // to enable parsing of json objects in the request body

app.get("/", (req, res) => {
    res.send("Hello World");
    // res.render("index", { title: "My Express App", message: "Hello" });
});

// app.post();
// app.put();
// app.post();

const courses = [
    { id: 1, name: "course1" },
    { id: 2, name: "course2" },
    { id: 3, name: "course3" },
];

app.get("/api/courses", (req, res) => {
    // res.send(JSON.stringify([1, 2, 3]));
    res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
    // res.send(req.params.id);
    // res.send(courses[req.params.id - 1]);
    // res.send(courses.at(req.params.id - 1));

    // http://localhost:3000/api/courses/1
    // http://localhost:3000/api/courses/10

    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course)
        res.status(404).send("The course with the given ID was not found.");
    res.send(course);
});

app.post("/api/courses", (req, res) => {
    // https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en
    // https://www.postman.com/
    // chrome://apps/
    // http://localhost:3000/api/courses/

    // https://joi.dev/api/?v=17.7.0
    // https://joi.dev/api/?v=17.7.0
    // https://joi.dev/resources/changelog/
    // npm view joi version
    // npm view --help

    // schema for an object
    // ctrl + shift + O + schema
    // const schema = {
    //     name: Joi.string().alphanum().min(3).max(30).required(),
    // };
    const schema = Joi.object({
        name: Joi.string().alphanum().min(3).max(30).required(),
    });

    const { error, value } = schema.validate(req.body);
    if (error) {
        res.status(400).send(error.details);
        // 400 Bad Request
        return;
    }

    // schema.validate(req.body, (err, value) => {
    //     if (err) {
    //         res.status(400).send(err.details[0].message);
    //         // 400 Bad Request
    //         return;
    //     }
    // });

    // const result = Joi.valid(req.body, schema);
    // if (result.error) {
    //     res.status(400).send(result.error.details[0].message);
    //     // res.status(400).send(err);
    //     res.send(result);
    //     // 400 Bad Request
    //     // res.status(400).send(err.details[0].message);
    //     return;
    // }

    // if (!req.body.name || req.body.name.length < 3) {
    //     // 400 Bad Request
    //     res.status(400).send(
    //         "Name is required and should be minimum 3 characters."
    //     );
    //     return;
    // }

    const course = {
        id: courses.length + 1,
        name: req.body.name,
    };
    courses.push(course);
    res.send(course);
});

// npm joi
// https://www.npmjs.com/package/joi

app.get("/api/posts/:year/:month", (req, res) => {
    // http://localhost:3000/api/posts/1/1?sortBy=name
    res.send(`
        ${JSON.stringify(req.params)}
        ${JSON.stringify(req.query)}`);
});

const PORT = process.env.PORT || 3000; // set PORT=4000 // export PORT=4000

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
