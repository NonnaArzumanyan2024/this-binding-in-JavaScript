/*
  This code defines an object `foo` with:
    - a property `bar` set to 42
    - a method `qux` which is an arrow function that logs `this.bar`

  Key facts about arrow functions and `this`:
    - Arrow functions do NOT have their own `this`.
    - Instead, they lexically capture `this` from the surrounding scope at the time they are created.
    - This captured `this` value cannot be changed by `.call()`, `.apply()`, or `.bind()`.

  In this example:
    1. The arrow function `qux` is created inside the object literal `foo`.
    2. However, the surrounding scope of `qux` is NOT the object `foo` — it’s the scope where `foo` itself is defined (in this case, the top-level/global scope of the file).
    3. In strict mode at the top level, `this` is `undefined`, so `this.bar` is `undefined`.
       In non-strict mode, `this` would refer to the global object (e.g., `global` in Node), which likely has no `bar` property, so still `undefined`.
    4. Even though we call `foo.qux.call({ bar: 100 })`, the `this` inside `qux` does not change because arrow functions ignore `.call()` and `.apply()` for `this` binding.

  This is an example of "arrow function binding" — the `this` value is fixed at creation time based on the surrounding lexical scope, not the calling context.
*/




let foo = {
    bar: 42,

    qux: () => {
        console.log(this.bar);
    }
}

foo.qux.call({bar:100}); // Output: undefined
