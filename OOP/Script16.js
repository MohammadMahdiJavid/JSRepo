class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.content[y * width + x] = element(x, y);
            }
        }
    }
    get(x, y) {
        return this.content[y * this.width + x];
    }
    set(x, y, value) {
        this.content[y * this.width + x] = value;
    }
}

class MatrixIterator {
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }
    next() {
        if (this.y == this.matrix.height) return { done: true };
        let value = {
            x: this.x,
            y: this.y,
            value: this.matrix.get(this.x, this.y),
        };
        this.x++;
        if (this.x == this.matrix.width) {
            this.x = 0;
            this.y++;
        }
        return { value, done: false };
    }
}

Matrix.prototype[Symbol.iterator] = function () {
    return new MatrixIterator(this);
};

console.log(Matrix.prototype);
// Matrix { [Symbol(Symbol.iterator)]: [Function] }
console.log(Object.keys(Matrix.prototype));
// []
console.log(Matrix);
// [Function: Matrix]
console.log(typeof Matrix);
// function

let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
for (let { x, y, value } of matrix) {
    console.log(x, y, value);
}
// → 0 0 value 0,0
// → 1 0 value 1,0
// → 0 1 value 0,1
// → 1 1 value 1,1
