/*
  This code defines a function `parent` that creates an object `foo` with:
    - a property `bar` set to 42
    - a method `qux` which is an arrow function that logs `this.bar`

  Important points about arrow functions and `this`:
    - Arrow functions do NOT have their own `this`.
    - Instead, they capture `this` from the surrounding (lexical) scope where they are defined.

  In this example:
    1. `qux` is defined inside `parent`, so its `this` is the same as `this` in `parent`.
    2. `parent` is called as a plain function (`parent()`), so in strict mode `this` is `undefined` inside `parent` (and thus also inside `qux`).
    3. When `console.log(this.bar)` runs, `this` is `undefined`, so accessing `this.bar` results in `undefined`.

  This is an example of "arrow function binding", where `this` is inherited from the enclosing scope, not from the object `foo`.
*/




function parent() {
    let foo = {
        bar: 42,

        qux: () => {
            console.log(this.bar);
        }
    }

    foo.qux(); // Output: undefined
}

parent();
