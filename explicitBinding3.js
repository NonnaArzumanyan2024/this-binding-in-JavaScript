/*
  This code defines an object `obj` with:
    - a property `num` set to 42
    - a method `foo` that logs `this`

  Then, `foo` is explicitly bound to `obj` using `.bind(obj)` and assigned to `fn`.

  When calling `fn()`:
    - Because of `.bind(obj)`, `this` inside `foo` is permanently bound to `obj`.
    - This is called "explicit binding".
    - Regardless of how `fn` is called, `this` will always refer to `obj`.

  The console will print the entire `obj` object:
    { num: 42, foo: [Function: foo] }
*/




let obj = {
  num: 42,

  foo() {
    console.log(this);
  }
}

const fn = obj.foo.bind(obj);
fn();  // Output: { num: 42, foo: [Function: foo] }
