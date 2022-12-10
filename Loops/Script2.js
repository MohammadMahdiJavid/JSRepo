// https://nodejs.org/api/process.html#process_process_stdout
// https://code.visualstudio.com/docs/nodejs/nodejs-debugging
// open user settings --> settings.json
/*
{
    Use IntelliSense to learn about possible attributes.
    Hover to view descriptions of existing attributes.
    For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}\\Script2.js",
            "console": "externalTerminal"
        }
    ]
}

Node JS
Edge --> needs html to script tag
*/

for (let index = 0; index < 100; index++) {
    // debugger;
    var ifTrue = false;
    if (index % 3 == 0) {
        process.stdout.write("Fizz");
        ifTrue = true;
    }
    if (index % 5 == 0) {
        process.stdout.write("Buzz");
        ifTrue = true;
    }
    if (!ifTrue) process.stdout.write(index.toString());
    console.log();
}

// BETTER CODE
for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
}
