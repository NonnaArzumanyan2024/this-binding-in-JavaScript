/* 
  This code defines an object `obj` with:
    - a property `num` set to 42
    - a method `foo` that logs `this.num`

  Then, we assign `obj.foo` (the function) to a standalone variable `fn`.
  This is called "default binding" or "window/global binding"

  When calling `fn()` without an object, `this` is NOT bound to `obj`.
  Instead, in strict mode, `this` will be `undefined`; in non-strict mode, it will be the global object (e.g., `window`).

  Since `this` is not `obj` inside `fn()`, `this.num` is `undefined`.

  The console will print `undefined`.
*/




let obj = {
  num: 42,
  
  foo() {
    console.log(this.num);
  }
}

const fn = obj.foo;
fn();  // Output: undefined
