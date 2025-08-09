/*
  This code defines a constructor function `foo` that:
    - assigns `this.x = 42`
    - defines a method `fn` as an arrow function that logs `this.x`

  When calling `const a = new foo();`:
    - `this` inside the constructor is bound to the new object `a` (new binding).
    - `a.x` is set to 42.
    - `fn` is an arrow function defined inside the constructor.

  Important about arrow function here:
    - Arrow functions do NOT have their own `this`.
    - They "lexically inherit" `this` from the surrounding scope.
    - So, `this` inside `fn` refers to the same `this` as in the constructor — the new object `a`.
    - Therefore, calling `a.fn()` logs `42`.

    Binding types involved:
    - "New binding": `this` in constructor bound to new object `a`.
    - "Lexical or arrow function binding": `this` inside arrow function `fn` inherits from constructor's `this`.
*/




function foo() {
  this.x = 42;

  this.fn = () => {
    console.log(this.x);
  }
}

const a = new foo();
a.fn();  // Output: 42
