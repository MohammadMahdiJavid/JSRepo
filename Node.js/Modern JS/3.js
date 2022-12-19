/*
Arrow Functions
this -> caller --> without caller (undefined)
*/

const square = (a) => {
    return a * a;
};

this.id = "exports";
console.log(this);

const square2 = (a) => a * a;
const square3 = (a) => a * a;
