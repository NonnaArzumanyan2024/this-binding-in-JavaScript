/* 
  This code defines an object `obj` with:
    - a property `num` set to 42
    - a method `foo` that logs `this.num`

  The method `foo` uses `"use strict"` mode.

  Then, `foo` is assigned to a standalone variable `fn`.

  When calling `fn()`:
    - Because it's called as a regular function (not as a method of an object),
      `this` inside `foo` is strictly `undefined` in strict mode.
    - Trying to access `this.num` causes a TypeError:
      "Cannot read properties of undefined (reading 'num')"
    - This happens because `this` is not bound to `obj`.

  To avoid this error, you can bind `this` explicitly or call the method on `obj`.
  
  This demonstrates the "default binding" rule:
    - When a function is called without an explicit context (no object before dot),
      `this` defaults to the global object (non-strict) or `undefined` (strict).
*/




let obj = {
  num: 42,

  foo() {
    "use strict";
    console.log(this.num); // Throws TypeError because this is undefined
  }
}

const fn = obj.foo;
fn(); // TypeError: Cannot read properties of undefined (reading 'num')
