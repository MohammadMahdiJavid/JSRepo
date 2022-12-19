// nested Block scopes

{
    {
        {
            var a = 42;
        }
    }
}
console.log(a);

// Block Scope and Function Scope
// Var --> Function Scope --> don't leak --> access outside scope is denied
// var --> outside Scope --> access is allowed
// declaring variable with let keyword --> Block Scope --> don't leak --> access outside scope is denied

// Block Scope and Function Scope are nested
// each scope is going to have its own copy of the variable --> CONST, LET
// Object.freeze() -> to freeze the object (first level) --> nested objects are going to be mutable
