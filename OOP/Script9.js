let object = new (class {
    getWord() {
        return "hello";
    }
})();

console.log(object.getWord());
// → hello
