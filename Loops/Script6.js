function repeat(number, repeat) {
    for (let i = 0; i < number; i++) {
        repeat(i);
    }
}

function unless(test, then) {
    if (!test) then();
}

repeat(3, (n) => {
    unless(n % 2 == 1, () => {
        console.log(n, "is even");
    });
});
// → 0 is even
// → 2 is even
