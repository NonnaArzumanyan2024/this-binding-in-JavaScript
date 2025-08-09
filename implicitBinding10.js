/*
  This code defines:
    - an object `obj` with a property `x` set to 42
    - a standalone function `foo` that logs `this.x`

  Then:
    - The function `foo` is assigned as a method `func` on `obj`.

  When calling `obj.func()`:
    - The call is a method call on `obj`.
    - Therefore, `this` inside `foo` is implicitly bound to `obj` (implicit binding).
    - `this.x` refers to `obj.x`, which is 42.

  The console will print: 42

  Implicit binding: When a function is called as a property of an object, `this` is bound to that object.
*/




let obj = {
  x: 42
}

function foo() {
  console.log(this.x);
}

obj.func = foo;
obj.func();  // Output: 42
