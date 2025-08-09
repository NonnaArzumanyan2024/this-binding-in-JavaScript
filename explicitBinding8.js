/*
  This code defines an object `obj` with:
    - a property `x` set to 42
    - a method `fn` that logs `this`

  Then calls:
    obj.fn.call(null);

  Explanation:
    - `.call(null)` tries to invoke `fn` with `this` explicitly set to `null`.
    - In "non-strict mode", when `null` or `undefined` is passed as `this`, JavaScript
      defaults `this` to the global object (`window` in browsers, `global` in Node.js).
    - In "strict mode", `this` remains `null` as passed.
  
  So:
    - In non-strict mode, `console.log(this)` outputs the global object.
    - In strict mode, `console.log(this)` outputs `null`.

  "explicit binding" because `.call()` explicitly sets `this`.
*/




let obj = {
  x: 42,

  fn: function() {
    console.log(this);
  }
}

obj.fn.call(null);  // Output: global object (non-strict) or null (strict mode)
