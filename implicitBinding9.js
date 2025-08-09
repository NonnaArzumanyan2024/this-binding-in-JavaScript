/*
  This code defines an object `obj` with:
    - a property `x` set to 42
    - a method `foo` which declares an arrow function `bar` that logs `this.x`

  Important points about `this` and arrow functions inside methods:
    - The method `foo` is a regular function, so when called as `obj.foo()`,
      `this` inside `foo` is bound to `obj` (implicit binding).
    - The arrow function `bar` is defined inside `foo`.
    - Arrow functions do NOT have their own `this`; they inherit `this` lexically
      from their surrounding function.
    - Therefore, inside `bar`, `this` is the same as in `foo`, i.e., `obj`.

  However:
    - In the current code, `bar` is declared but never called.
    - So nothing is logged.

  To see the output, call `bar()` inside `foo`.
*/



let obj = {
  x: 42,

  foo() {
    const bar = () => console.log(this.x);
    bar(); // Now logs 42 because `this` is `obj`
  }
}

obj.foo(); // Output: 42
