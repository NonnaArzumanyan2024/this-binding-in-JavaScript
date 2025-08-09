/*
  This code defines an object `obj` with:
    - a property `num` set to 42
    - a method `foo` that logs `this`

  Then, `foo` is assigned to a standalone variable `fn`.

  When calling `fn()`:
    - Because it's called as a plain function (not as a method), 
      `this` is not bound to `obj`.
    - In "non-strict mode", `this` defaults to the global object 
      (e.g., `window` in browsers, `global` in Node.js).
    - In "strict mode", `this` would be `undefined` (which may cause errors).
  
  This demonstrates the "default binding" rule:
    - When a function is called without an explicit context (no object before dot),
      `this` defaults to the global object (non-strict) or `undefined` (strict).
*/




let obj = {
  num: 42,

  foo() {
    console.log(this);  // Output: global object (non-strict mode)
  }
}

const fn = obj.foo;
fn();
