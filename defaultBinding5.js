/*
  This code defines a class `Foo` with a method `bar` that logs `this`.

  When we create an instance `a` of `Foo`, the method `bar` is part of `a`.

  We assign `a.bar` to a standalone variable `fn`.

  Since class methods run in strict mode by default:
    - When calling `fn()` as a standalone function,
      `this` is `undefined` inside `bar`.
    - This is because in strict mode, `this` is not set to the global object
      during a plain function call (default binding).
  
  Therefore, `console.log(this)` outputs `undefined`.

  To ensure `this` refers to the instance, call `a.bar()` directly,
  or bind the method to the instance with `.bind(a)`.
*/




class Foo {
  bar() {
    console.log(this); // Output: undefined
  }
}

let a = new Foo();
const fn = a.bar;
fn();
