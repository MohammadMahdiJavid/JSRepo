const boardSize = 8;
for (let index = 0; index < boardSize; index++) {
    let output = "";
    for (let index2 = 0; index2 < boardSize; index2++) {
        if ((index + index2) % 2 == 0) output += " ";
        else output += "#";
    }
    console.log(output);
}

let size = 8;
let board = "";
for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}

console.log(board);
