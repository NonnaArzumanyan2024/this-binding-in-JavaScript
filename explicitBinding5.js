/*
  This code defines an object `obj` with:
    - a property `x` set to 42
    - a method `foo` defined as an arrow function that logs `this.x`

  Important notes about `this` in arrow functions:
    - Arrow functions do NOT have their own `this`.
    - Instead, they inherit `this` lexically from the surrounding scope.
    - Here, `foo` is defined inside the global (or module) scope,
      so `this` refers to the global object or is `undefined` in strict mode.

  When calling `obj.foo.bind({x:100})()`:
    - `.bind()` attempts to set `this` to `{x:100}`.
    - However, for arrow functions, `.bind()` has NO effect on `this`.
    - Therefore, `this.x` remains from the lexical scope, usually `undefined`.

  The console will print `undefined`.
*/




let obj = {
  x: 42,

  foo: () => {
    console.log(this.x); // Output: undefined
  }
}

obj.foo.bind({x:100})();
