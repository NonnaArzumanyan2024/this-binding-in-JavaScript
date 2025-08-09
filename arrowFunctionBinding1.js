/*
  This code defines an object `obj` with:
    - a property `x` set to 42
    - a method `foo` defined as an arrow function that logs `this.x`

  Important notes about `this` and arrow functions:
    - Arrow functions do NOT have their own `this`.
    - Instead, they inherit `this` lexically from the surrounding scope.
    - Here, `foo` is defined inside the object literal, but the arrow function’s `this`
      is taken from the enclosing (probably global or module) scope.
    - Therefore, `this.x` inside the arrow function does NOT refer to `obj.x`.

  When calling `obj.foo()`:
    - The arrow function's `this` remains the same as in its lexical scope,
      so it does NOT point to `obj`.
    - Most likely, `this.x` is `undefined`.

  This behavior is known as "lexical `this` binding" (sometimes called "arrow function binding").

  To have `this` bound to `obj`, use a regular function instead of an arrow function.
*/




let obj = {
  x: 42,

  foo: () => {
    console.log(this.x); // Output: undefined
  }
}

obj.foo();
