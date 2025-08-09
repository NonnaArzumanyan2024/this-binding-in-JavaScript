/*
  This code defines an object `obj` with:
    - a property `x` set to 42
    - a method `fn` defined as an arrow function that logs `this.x`

  Important notes about arrow functions and `this` in Node.js:
    - Arrow functions do NOT have their own `this`. They use `this` from the surrounding (lexical) scope.
    - In Node.js modules, the top-level `this` is `undefined` because modules run in strict mode by default.
    - Therefore, `this` inside `fn` is `undefined`.
    - Using `.call({x: 100})` does NOT change `this` inside an arrow function.
  
  When running this code in Node.js, `console.log(this.x)` outputs `undefined`
  because `this` is `undefined` and `undefined.x` is `undefined`.

  To have `this` reflect the object or passed context, use a regular function instead of an arrow function.
*/




let obj = {
  x: 42,

  fn: () => {
    console.log(this.x);  
  }
}

obj.fn.call({x: 100});  // Output: undefined
