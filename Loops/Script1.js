for (let index = 0; index < 8; index++) {
    console.log("#".repeat(index));
}

// OR .......

for (let line = "#"; line.length < 8; line += "#") console.log(line);
