/*
  This code defines an object `obj` with a method `foo`:
    - `foo` is a regular function that logs `this`.

  Then:
    - `const foo = obj.foo;` assigns the function `foo` to a standalone variable `foo`.
    - When calling `foo()` directly (not as a method of `obj`),
      `this` inside `foo` depends on the call context:
        - In "non-strict mode", `this` is the global object (`window` in browsers, `global` in Node.js).
        - In "strict mode", `this` is `undefined`.

  Since `foo` is called as a plain function, `this` is NOT bound to `obj`.

  The console will print:
    - `undefined` (in strict mode)
    - or the global object (in non-strict mode)

  Default binding: when a function is called standalone,`this` defaults to the global object (non-strict) or `undefined` (strict).
*/



let obj = {
  foo: function() {
    console.log(this);
  }
}

const foo = obj.foo;
foo(); // Output: undefined (strict mode) or global object (non-strict)
