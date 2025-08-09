/*
  This code defines an object `obj` with a method `foo`:
    - `foo` is a regular function that logs `this`.

  Then it calls:
    new obj.foo();

  Explanation:
    - Using `new` before a function call creates a new object and sets `this` inside the function to that new object. This is called **new binding**.
    - So, `new obj.foo()` ignores the fact that `foo` is a method of `obj`.
    - Instead, it treats `foo` as a constructor function and creates a new object where `this` points.
    - Inside `foo`, `console.log(this)` logs the newly created object (an instance of `foo`).

  New binding: `this` is bound to the new object created by the `new` operator.
*/




let obj = {
  foo: function () {
    console.log(this);
  }
}

new obj.foo();  // Output: foo {}
