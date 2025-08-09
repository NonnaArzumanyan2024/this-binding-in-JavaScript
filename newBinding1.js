/*
  This code defines a constructor function `foo` that:
    - assigns `this.x = 42`
    - defines a method `fn` on `this` that logs `this.x`

  When calling `const a = new foo();`:
    - JavaScript creates a new empty object.
    - `this` inside `foo` is "newly bound" to that object — this is called **new binding**.
    - The new object gets a property `x` with value 42.
    - It also gets a method `fn`.

  When calling `a.fn();`:
    - `fn` is called as a method of `a`.
    - Therefore, `this` inside `fn` uses "implicit binding" to refer to `a`.
    - So, `this.x` is 42.

  The console will print: 42

  Binding types involved:
    - "New binding": `this` in constructor function points to the new object created by `new`.
    - "Implicit binding": `this` inside method call refers to the object owning the method.
*/



function foo() {
  this.x = 42;

  this.fn = function() {
    console.log(this.x);
  }
}

const a = new foo();
a.fn();  // Output: 42
