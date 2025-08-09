/*
  This code defines an object `obj` with:
    - a property `num` set to 42
    - a method `foo` that logs `this`

  The method `foo` uses `"use strict"` mode.

  Then, the method `foo` is assigned to a standalone variable `fn`.

  When calling `fn()`:
    - Since `fn` is called as a regular function, not as a method of an object,
      in strict mode `this` is `undefined`.
    - Therefore, `console.log(this)` outputs `undefined`.

  If not in strict mode, `this` would default to the global object (e.g., `window` in browsers).
  
  This demonstrates the "default binding" rule:
    - When a function is called without an explicit context (no object before dot),
      `this` defaults to the global object (non-strict) or `undefined` (strict).
*/




let obj = {
  num: 42,

  foo() {
    "use strict";
    console.log(this); // Output: undefined
  }
}

const fn = obj.foo;
fn();
