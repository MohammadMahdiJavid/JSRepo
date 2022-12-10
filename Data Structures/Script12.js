const score = { visitors: 0, home: 0 };
console.log(score);

// This is okay
score.visitors = 1;
console.log(score);

// This isn't allowed
score = { visitors: 1, home: 1 };
console.log(score);
