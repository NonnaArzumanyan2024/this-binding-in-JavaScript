/* 
  This code defines an object `obj` with a method `foo` (regular function).

  Then, an arrow function `foo` is created that calls `obj.foo()`.

  When `foo()` (the arrow function) is called:
    - It executes `obj.foo()`.
    - Inside `obj.foo()`, `this` refers to `obj` because the method is called using the object (`implicit binding`).

  Arrow functions do NOT have their own `this`, but here it doesn't matter 
  because the arrow function just calls `obj.foo()`.

  The console will print the entire `obj` object.
*/

let obj = {
  foo: function() {
    console.log(this);
  }
}

const foo = () => obj.foo();
foo(); // Output: { foo: [Function: foo] }
