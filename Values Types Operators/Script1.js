let total = 0,
    count = 1;
while (count <= 10) {
    total += count;
    count += 1;
}
console.log(total);
// → 55

console.log(sum(range(1, 10)));
// → 55
